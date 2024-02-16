package com.skilldistillery.inventorytracker.services;

import java.util.List;

import com.skilldistillery.inventorytracker.entities.Inventory;

public interface InventoryService {
	
	Inventory show(int id);
	List<Inventory> index();
	Inventory create(Inventory inventory);
	Inventory update(Inventory inventory, int id);
	boolean delete(int id);
}
