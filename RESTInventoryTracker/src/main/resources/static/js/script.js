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
			if(xhr.status === 200) {
				let inventory = JSON.parse(xhr.responseText);
				displayInventoryList(inventory);
				
			} else {
				
			}
		}
		
	};
	xhr.send();
}

function displayInventoryList(inventory) {
    let tableBody = document.getElementById('inventoryTableBody');
    tableBody.innerHTML = '';
    
    inventory.forEach(function(item) {
        let row = document.createElement('tr');
        row.addEventListener('click', function() {
            displayItemDetails(item.id);
        });
        
        row.innerHTML = `<td>${item.id}</td><td>${item.itemName}</td>`;
        
        tableBody.appendChild(row);
    });
}

function displayItemDetails(itemId) {
    fetch(`api/inventory/${itemId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch item details');
        }
        return response.json();
    })
    .then(item => {
        let itemDetailsDiv = document.getElementById('itemDetailsDiv');
        itemDetailsDiv.innerHTML = `
            <h2>Item Details</h2><p>ID: ${item.id}</p><p>Name: ${item.itemName}</p><p>Quantity: ${item.quantity}</p><p>Unit Price: ${item.unitPrice}</p><p>Category: ${item.category}</p><p>Location: ${item.location}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}