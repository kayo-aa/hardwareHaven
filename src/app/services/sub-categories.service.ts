import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCategoria } from '../models/sub-categoria.model';

@Injectable({
  providedIn: 'root',
})

export class SubCategoriesService {
  private apiUrl = 'https://static.compragamer.com/test/subcategorias.json';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<SubCategoria[]>(this.apiUrl);
  }
}
