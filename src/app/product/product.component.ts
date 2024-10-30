import { Component, OnInit, Input } from '@angular/core';
import { FigurineService } from '../figurine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit { 
  figurines: any[] = [];
  figurine: any;

  
constructor(private route: ActivatedRoute, private FigurineService: FigurineService){}




ngOnInit(): void {
  const FigurineName =this.route.snapshot.paramMap.get('name');
  if (FigurineName) {this.figurine = this.FigurineService.getfigurinename(FigurineName);}
  else { this.figurines = this.FigurineService.getfigurines();}
}
}