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
    if(inventory && Array.isArray(inventory) && inventory.length > 0) {
        let dataDiv = document.getElementById('inventoryListDiv');
        dataDiv.textContent = '';
        
        for (let inventories of inventory) {
            let li = document.createElement('li');
            li.textContent = inventories.itemName;
            dataDiv.appendChild(li);
        }
    }
}