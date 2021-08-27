import { CartItem } from './../restaurants/restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartServices } from './../restaurants/restaurant-detail/shopping-cart/shopping-cart.services';
import { Injectable } from "@angular/core";

@Injectable()
export class OrderService {

  constructor(private cartServices: ShoppingCartServices){

  }

  CartItems(): CartItem[] {
    return this.cartServices.items
  }

  increaseQtd(item: CartItem){
    this.cartServices.increaseQtd(item)
  }

  decreaseQtd(item: CartItem){
    this.cartServices.decreaseQtd(item)
  }

  remove(item: CartItem){
    this.cartServices.removeItem(item)
  }
}
