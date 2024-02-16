package com.skilldistillery.inventorytracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.inventorytracker.entities.Inventory;
import com.skilldistillery.inventorytracker.services.InventoryService;

import jakarta.servlet.http.HttpServletResponse;

@RequestMapping("api")
@RestController
public class InventoryController {
	
	@Autowired
	private InventoryService invService;
	
	@GetMapping("inventory")
	public List<Inventory> index() {
		return invService.index();
	}
	
	@GetMapping("inventory/{id}")
	public Inventory show(@PathVariable("id") int id, HttpServletResponse res) {
		Inventory inventory = invService.show(id);
		if(inventory == null) {
			res.setStatus(404);
		}
		return inventory;
	}
	
	@PostMapping("inventory")
	public Inventory create(@RequestBody Inventory inventory, HttpServletResponse res) {
		Inventory created = invService.create(inventory);
		if (created != null) {
			res.setStatus(201);
		} else if (created == null) {
			res.setStatus(400);
		}
		return created;
	}
	
	
}
