import { ProductoImagen } from "./producto-imagen..model";

export interface Producto {
  destacado: number;
  nombre: string;
  id_producto: number;
  id_subcategoria: number;
  precio: number;
  imagenes: ProductoImagen[];
  vendible: number;
  stock: number;
  garantia: number;
  iva: number;
}

