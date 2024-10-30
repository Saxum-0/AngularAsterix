import { Component, NgModule, OnInit } from '@angular/core';
import { figurine, FigurineService } from '../figurine.service';
import { Router } from '@angular/router';







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  figurines: any[] = [];
  search: string = '';
  ordersort: boolean = true;


  constructor (private FigurineService: FigurineService, private router: Router) {}

  ngOnInit(): void {
      this.figurines = this.FigurineService.figurines
    }
    
    apropos(event: MouseEvent, figurine: any): void {
      event.preventDefault();
      this.router.navigate(['/product' , figurine.name])
    }

    //pipe orderby
    getorderby(): string { return this.ordersort ? 'Décroissant' : 'croissant'}

    inverseorderby(): void {this.ordersort = !this.ordersort;}
}
