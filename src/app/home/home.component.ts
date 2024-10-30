import { Component, OnInit } from '@angular/core';
import { figurine, FigurineService } from '../figurine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  figurines: figurine [] = [];
  search: string = '';
  ordersort: boolean = true;


  constructor (private FigurineService: FigurineService, private ROUTER: Router) {}
    ngOnInit(): void {
      this.figurines = this.FigurineService.getfigurines();
    }
    apropos(figurinesname: string) {
      this.ROUTER.navigate(['/produit' , figurinesname])

    }
    getorderby(): string { return this.ordersort ? 'Décroissant' : 'croissant'}

    inverseorderby(): void {this.ordersort = !this.ordersort;}
}
