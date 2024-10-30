import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(figurines: any[], name: string): any {
    if (!figurines || !name) { return figurines;}
    else {return figurines.filter(figurine => figurine.name.toLowerCase().includes(name.toLowerCase()))}
}
}