package com.skilldistillery.inventorytracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.inventorytracker.entities.Inventory;
import com.skilldistillery.inventorytracker.services.InventoryService;

@RequestMapping("api")
@RestController
public class InventoryController {
	
	@Autowired
	private InventoryService invService;
	
	@GetMapping("inventory")
	public List<Inventory> index() {
		return invService.index();
	}
	
	
}
