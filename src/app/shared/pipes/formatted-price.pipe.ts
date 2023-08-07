import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattedPrice',
})

export class FormattedPricePipe implements PipeTransform {
  transform(price: number | undefined, iva: number | undefined): string {
    if (price && iva) {
      const priceWithIVA = price * (1 + iva / 100);
      return `${priceWithIVA.toFixed(0)} ARS`;
    }
    return '';
  }
}
