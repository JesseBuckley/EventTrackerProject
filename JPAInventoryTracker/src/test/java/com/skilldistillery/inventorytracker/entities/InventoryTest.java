package com.skilldistillery.inventorytracker.entities;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

class InventoryTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Inventory inv;
	
	
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	    emf = Persistence.createEntityManagerFactory("JPAInventoryTracker");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	    emf.close();
	}
	
	@BeforeEach
	void setUp() throws Exception {
	    em = emf.createEntityManager();
	    inv = em.find(Inventory.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
	   inv = null;
		em.close();
	}
	
	@Test
	void test_inventory_entity_mapping() {
		assertNotNull(inv);
		
		assertEquals("Hammer Ball-Peen", inv.getItemName());
		}
}
