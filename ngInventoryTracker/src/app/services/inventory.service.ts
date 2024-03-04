import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, throwError } from 'rxjs';
import { Inventory } from '../models/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private url = environment.baseUrl + 'api/inventory';

  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('InventoryService.index(): error retrieving inventory: ' + err)
        );
      })
    );
  }
  create(inventory: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(this.url, inventory).pipe(
      catchError((err: any) => {
        console.error('InventoryService.create(): error creating inventory', err);
        return throwError(
          () => new Error('Error creating inventory: ' + err.message)
        );
      })
    );
  }

  update(inventory: Inventory): Observable<Inventory> {
    const updateUrl = `${this.url}/${inventory.id}`;
    return this.http.put<Inventory>(updateUrl, inventory).pipe(
      catchError((err: any) => {
        console.error('inventoryService.update(): error updating inventory', err);
        return throwError(
          () => new Error('Error updating inventory: ' + err.message)
        );
      })
    );
  }

  destroy(id: number): Observable<any> {
    const deleteUrl = `${this.url}/${id}`;
    return this.http.delete(deleteUrl).pipe(
      catchError((err: any) => {
        console.error('inventoryService.destroy(): error deleting inventroy', err);
        return throwError(
          () => new Error('Error deleting todo: ' + err.message)
        );
      })
    );
  }
}
