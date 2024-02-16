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

}
