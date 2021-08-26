import { ShoppingCartServices } from './shopping-cart.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private ShoppingCartServices: ShoppingCartServices) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.ShoppingCartServices.items;
  }

  total(): number {
    return this.ShoppingCartServices.total();
  }

  clear(){
    this.ShoppingCartServices.clear()
  }

  removeItem(item: any){
    this.ShoppingCartServices.removeItem(item)
  }

  addItem(item: any){
    this.ShoppingCartServices.addItem(item)
  }
}
