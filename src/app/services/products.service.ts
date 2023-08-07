import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://static.compragamer.com/test/productos.json';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}
