import { Pipe, PipeTransform } from '@angular/core';
import { figurine } from './figurine.service';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(figurines: figurine[], orderby: string = 'order'): any[] {
    if (orderby === "croissant") { return figurines.sort((a:any, b:any) => a.prix - b.prix)}
    else { return figurines.sort((a:any, b:any) => b.prix - a.prix)}
  }
}
