import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shooping-cart.service';

@Component({
  selector: 'tm-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService : ShoppingCartService) { }

  ngOnInit() {
  }

  getItems(): any[] {
    return this.shoppingCartService.items;
  }

  getTotal() : number{
    return this.shoppingCartService.total();
  }

  clear(){
    this.shoppingCartService.clear();
  }

  removeItem(item: any){
    this.shoppingCartService.removeItem(item);
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item);
  }

}