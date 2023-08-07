import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattedName',
})
export class FormattedNamePipe implements PipeTransform {
  transform(name: string | undefined): string {
    const maxLength = 75;
    if (name) {
      return name.length <= maxLength ? name : name.substring(0, maxLength) + '...';
    }
    return '';
  }
}
