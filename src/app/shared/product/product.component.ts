import { SubCategoriesService } from './../../services/sub-categories.service';
import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { SubCategoria } from 'src/app/models/sub-categoria.model';
import { CartCounterService } from 'src/app/services/cart-counter.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input()
  product: Producto | null = null;

  
  subCategorias: SubCategoria[] | null = null;
  productSubCategory: string | null = null;
  imgUrl = '';

  constructor(
    private subCategoriesService: SubCategoriesService,
    private cartCounterService: CartCounterService
  ) {}

  ngOnInit(): void {
    this.subCategoriesService.getAll().subscribe((data) => {
      this.subCategorias = data;
      this.setProductSubCategory();
    });
    this.imgUrl =
      window.innerWidth > 900
        ? `https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_${this.product?.imagenes[0].nombre}.jpg`
        : `https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_${this.product?.imagenes[0].nombre}-med.jpg`;
  }

  setProductSubCategory(): void {
    if (this.product && this.subCategorias) {
      for (const subCategoria of this.subCategorias) {
        if (subCategoria.id === this.product.id_subcategoria) {
          this.productSubCategory = subCategoria.nombre;
          break;
        }
      }
    }
  }

  getFormattedPrice(
    precio: number | undefined,
    iva: number | undefined
  ): string {
    if (precio && iva) {
      const priceWithIVA = precio * (1 + iva / 100);
      return `${priceWithIVA.toFixed(0)} ARS`;
    }
    return '';
  }

  onClick() {
    this.cartCounterService.addProduct();
  }
}
