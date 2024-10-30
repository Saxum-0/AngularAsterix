import { Component, OnInit } from '@angular/core';
import { figurine, FigurineService } from '../figurine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit { 
  figurine?: figurine;

constructor(
  private FigurineService: FigurineService,
  private route: ActivatedRoute
){}
ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    const figurinename = String(params.get('name'));
    this.figurine = this.FigurineService.getfigurinename(figurinename)
  })

}


}