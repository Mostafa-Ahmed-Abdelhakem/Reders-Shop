import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBook',
})
export class FilterBookPipe implements PipeTransform {
  transform(items: any[], searchTerm: String) {
    if (!searchTerm) {
      return;
    } else {
      console.log(items);
      return items.filter((i) => i.name.includes(searchTerm));
    }
  }
}
