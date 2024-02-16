package com.skilldistillery.inventorytracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.inventorytracker.entities.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory, Integer>{

}
