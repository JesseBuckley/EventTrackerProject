console.log('script.js');

window.addEventListener('load', function(e) {
	console.log('page loaded');

	loadAllInventory();
});

function loadAllInventory() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/inventory');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status === 200) {
				let inventory = JSON.parse(xhr.responseText);
				handleInventoryData(inventory);
			} else {
				console.error('Failed to fetch inventory:', xhr.status);
			}
		}
	};
	xhr.send();
}

function displayInventoryList(inventory) {
	let tableBody = document.getElementById('inventoryTableBody');
	tableBody.innerHTML = '';

	if (inventory && inventory.length > 0) {
		inventory.forEach(function(item) {
			let row = document.createElement('tr');

			row.addEventListener('click', function() {
				console.log('Row clicked. Item ID:', item.id);
				displayItemDetails(item.id);
			});

			row.innerHTML = `<td>${item.id}</td><td>${item.itemName}</td>`;
			tableBody.appendChild(row);
		});
	} else {
		console.log('Inventory is empty');
	}
}

function displayItemDetails(id) {
	fetch(`api/inventory/${id}`)
		.then(response => {
			if (!response.ok) {
				throw new Error('Failed to fetch item details');
			}
			return response.json();
		})
		.then(item => {

			let tableContainer = document.createElement('div');
			tableContainer.style.width = '60%';
			tableContainer.style.margin = 'left';

			let itemDetailsTable = document.createElement('table');
			itemDetailsTable.classList.add('table', 'table-striped', 'text-left');

			Object.entries(item).forEach(([key, value]) => {
				let row = itemDetailsTable.insertRow();
				let keyCell = row.insertCell(0);
				let valueCell = row.insertCell(1);
				keyCell.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter
				keyCell.style.fontWeight = 'bold';
				keyCell.style.textAlign = 'left';
				valueCell.textContent = value;
				valueCell.style.textAlign = 'left';
			});

			let editButtonCell = itemDetailsTable.insertRow().insertCell(0);
			let editButton = document.createElement('button');
			editButton.textContent = 'Edit';
			editButton.classList.add('btn', 'btn-primary');
			editButton.addEventListener('click', function() {
				editItem(id);
			});
			editButtonCell.appendChild(editButton);

			let deleteButtonCell = itemDetailsTable.rows[itemDetailsTable.rows.length - 1].insertCell(1);
			let deleteButton = document.createElement('button');
			deleteButton.textContent = 'Delete';
			deleteButton.classList.add('btn', 'btn-danger');
			deleteButton.addEventListener('click', function() {
				deleteItem(id);
			});
			deleteButtonCell.appendChild(deleteButton);

			let itemDetailsDiv = document.getElementById('itemDetailsDiv');
			itemDetailsDiv.innerHTML = '';
			tableContainer.appendChild(itemDetailsTable);
			itemDetailsDiv.appendChild(tableContainer);
		})
		.catch(error => {
			console.error('Error:', error);
		});
}

function deleteItem(id) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', `api/inventory/${id}`, true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 204) {
				console.log('Delete success', xhr.status + ' id # ' + id);
				loadAllInventory(); // Reload inventory list
				let itemDetailsDiv = document.getElementById('itemDetailsDiv');
				itemDetailsDiv.innerHTML = '';
			} else {
				console.error('Failed to delete item:', xhr.status);
			}
		}
	};

	xhr.send();
}

function editItem(id) {
	fetch(`api/inventory/${id}`)
		.then(response => {
			if (!response.ok) {
				throw new Error('Failed to fetch item details');
			}
			return response.json();
		})
		.then(item => {
			displayEditForm(item);
		})
		.catch(error => {
			console.error('Error:', error);
		});
}

function displayEditForm(item) {
	let itemDetailsDiv = document.getElementById('itemDetailsDiv');
	itemDetailsDiv.innerHTML = '';

	let idInput = createInputField('ID', 'id', item.id, true); // Disable editing for ID
	let nameInput = createInputField('Name', 'itemName', item.itemName);
	let quantityInput = createInputField('Quantity', 'quantity', item.quantity);
	let unitPriceInput = createInputField('Unit Price', 'unitPrice', item.unitPrice);
	let categoryInput = createInputField('Category', 'category', item.category);
	let locationInput = createInputField('Location', 'location', item.location);

	itemDetailsDiv.appendChild(idInput);
	itemDetailsDiv.appendChild(nameInput);
	itemDetailsDiv.appendChild(quantityInput);
	itemDetailsDiv.appendChild(unitPriceInput);
	itemDetailsDiv.appendChild(categoryInput);
	itemDetailsDiv.appendChild(locationInput);

	let saveButton = document.createElement('button');
	saveButton.textContent = 'Save';
	saveButton.classList.add('btn', 'btn-primary');
	saveButton.addEventListener('click', function() {
		saveEditedItem(item.id);
	});
	itemDetailsDiv.appendChild(saveButton);
}

function createInputField(labelText, propertyName, value, disabled = false) {
	let inputContainer = document.createElement('div');

	let label = document.createElement('label');
	label.textContent = labelText;
	inputContainer.appendChild(label);

	let input = document.createElement('input');
	input.type = 'text';
	input.value = value;
	input.id = propertyName + 'Sauce';
	input.disabled = disabled;
	inputContainer.appendChild(input);

	inputContainer.appendChild(document.createElement('br'));

	return inputContainer;
}

function saveEditedItem(id) {

	let itemName = document.getElementById('itemNameSauce').value;

	let quantity = document.getElementById('quantitySauce').value;

	let unitPrice = document.getElementById('unitPriceSauce').value;

	let category = document.getElementById('categorySauce').value;

	let location = document.getElementById('locationSauce').value;


	let updatedItemData = {
		itemName: itemName,
		quantity: quantity,
		unitPrice: unitPrice,
		category: category,
		location: location
	};
	console.log('Updated Item Data:', updatedItemData);

	let xhr = new XMLHttpRequest();
	xhr.open('PUT', `api/inventory/${id}`);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				console.log('Update successful', xhr.status + ' id #' + id);
				loadAllInventory(); // Reload inventory list
				let itemDetailsDiv = document.getElementById('itemDetailsDiv');
				itemDetailsDiv.innerHTML = '';
			} else {
				console.error('Failed to update item:', xhr.status);
			}
		}
	};
	xhr.send(JSON.stringify(updatedItemData));
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('addItemForm').addEventListener('submit', function(event) {
		event.preventDefault();
		addItem();
	});
});


function addItem() {
	let newItemData = {
		itemName: document.getElementById('itemName').value,
		quantity: document.getElementById('quantity').value,
		unitPrice: document.getElementById('unitPrice').value,
		category: document.getElementById('category').value,
		location: document.getElementById('location').value
	};

	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/inventory', true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 201) {
				console.log('Add successful', xhr.status);
				let itemDetailsDiv = document.getElementById('itemDetailsDiv');
				itemDetailsDiv.innerHTML = '';
				loadAllInventory(); // Reload inventory list
			} else {
				console.error('Failed to add item:', xhr.status);
			}
		}
	};
	xhr.send(JSON.stringify(newItemData));
}

// Function to calculate the total value of all items in the inventory
function calculateTotalValue(inventory) {
    let totalValue = 0;

    inventory.forEach(function(item) {
       let itemTotal = item.unitPrice * item.quantity;
       totalValue += itemTotal;
    });

    return totalValue;
}

// Function to display the total value in the HTML
function displayTotalValue(totalValue) {
    // Convert totalValue to a string with 2 decimal places
    let formattedTotalValue = parseFloat(totalValue.toFixed(2));
    
    // Display formatted total value in the HTML
    let totalValueDiv = document.getElementById('totalValueDiv');
    totalValueDiv.innerHTML = `<h2>Total Inventory Value: $${formattedTotalValue}</h2>`;
}

// Function to handle the inventory data after loading
function handleInventoryData(inventory) {
    displayInventoryList(inventory);
    const totalValue = calculateTotalValue(inventory); 
    displayTotalValue(totalValue); 
}