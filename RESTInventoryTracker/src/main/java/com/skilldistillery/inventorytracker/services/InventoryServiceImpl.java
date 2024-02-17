package com.skilldistillery.inventorytracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.inventorytracker.entities.Inventory;
import com.skilldistillery.inventorytracker.repositories.InventoryRepository;

@Service
public class InventoryServiceImpl implements InventoryService {

	@Autowired
	private InventoryRepository invRepo;

	@Override
	public List<Inventory> index() {

		return invRepo.findAll();
	}

	@Override
	public Inventory show(int id) {

		return invRepo.searchById(id);
	}

	@Override
	public Inventory create(Inventory inventory) {
		return invRepo.save(inventory);
	}

	@Override
	public Inventory update(Inventory inventory, int id) {
		Inventory original = invRepo.searchById(id);

		original.setItemName(inventory.getItemName());
		original.setQuantity(inventory.getQuantity());
		original.setUnitPrice(inventory.getUnitPrice());
		original.setCategory(inventory.getCategory());
		original.setLocation(inventory.getLocation());

		return invRepo.save(original);
	}

	@Override
	public boolean delete(int id) {
		invRepo.deleteById(id);
		return !invRepo.existsById(id);
	}

}
