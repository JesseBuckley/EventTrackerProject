import { Observable, catchError, throwError } from "rxjs";

export class Inventory {
  id: number = 0;
  itemName: string = '';
  quantity: number = 0;
  unitPrice: number = 0;
  category: string = '';
  location: string = '';


  constructor(
    id: number = 0, itemName: string = '', quantity: number = 0,
     unitPrice: number = 0, category: string = '', location: string = '') {
    this.id = id;
    this.itemName = itemName;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.category = category;
    this.location = location;
  }

}
