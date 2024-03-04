import { Inventory } from './../../models/inventory';
import { InventoryService } from './../../services/inventory.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  isEditing: boolean = false;
  newInventory: Inventory = new Inventory();
  selected: Inventory | null = null;
  editInventory: Inventory | null = null;
  inventory: Inventory[] = [];

    constructor(private inventoryService: InventoryService) { }


  ngOnInit(): void {
    this.loadInventory();
  }

  loadInventory() {
    this.inventoryService.index().subscribe( {
      next: (inventoryList) => {
        this.inventory = inventoryList;
        console.log(this.inventory);
      },
      error: (err: any) => {
        console.error('InventoryListComponent.loadInventory: error');
        console.error(err);
      }
    });
  }

  addInventory() {
    this.inventoryService.create(this.newInventory).subscribe(
      (createdInventory) => {
        this.inventory.push(createdInventory);
        this.newInventory = new Inventory();
        this.loadInventory();
      },
      (error) => {
        console.error('Error creating inventory:', error);
      }
    );
  }

  deleteInventory(id: number) {
    this.inventoryService.destroy(id).subscribe(
      () => {
        this.inventory = this.inventory.filter((inventory) => inventory.id !== id);
      },
      (error) => {
        console.error('Error deleting inventory:', error);
      }
    );
  }

  updateInventory() {
    if (this.editInventory) {
      this.inventoryService.update(this.editInventory).subscribe(
        () => {
          this.isEditing = false;
          this.editInventory = null;
          this.loadInventory();
        },
        (error) => {
          console.error('Error updating inventory:', error);
        }
      );
    }
  }

  displayInventory(item: Inventory): void {
    this.selected = item;
  }

  displayTable(): void {
    this.selected = null;
  }

  setEditInventory() {
    this.isEditing = true;
    this.editInventory = Object.assign({}, this.selected);
  }

  getInventoryCount(): number {
    return this.inventory.length;
  }

  getTotalValue(): number {
    let total = 0;
    this.inventory.forEach(item => {
      total += item.quantity * item.unitPrice;
    });
    return total;
  }

  title = 'Inventory List';
}
