import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Producto } from 'src/app/models/producto.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Producto[] = [];
  categoryId: string | null = null;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.categoryId = params.get('id');
          return this.productsService.getAll();
        })
      )
      .subscribe((data) => {
        this.products = this.filterByCategory(data, this.categoryId);
      });
  }

  filterByCategory(data: Producto[], id: string | null): Producto[] {
    if (data && id) {
      return data.filter(
        (element) => element.id_subcategoria.toString() === id
      );
    } else {
      return data;
    }
  }
}

