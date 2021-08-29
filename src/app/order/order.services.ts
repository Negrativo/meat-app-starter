import { Observable } from 'rxjs/Observable';
import { CartItem } from './../restaurants/restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartServices } from './../restaurants/restaurant-detail/shopping-cart/shopping-cart.services';
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { Order, orderItem } from './order.model';
import { MEAT_API } from 'app/app.api';

@Injectable()
export class OrderService {

  constructor(private cartServices: ShoppingCartServices, private http: Http){ }

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

  itemsValue(): number {
    return this.cartServices.total()
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return this.http.post(`${MEAT_API}/orders`,
                          JSON.stringify(order),
                          new RequestOptions({headers: headers}))
                    .map(response => response.json())
  }

  clear() {
    this.cartServices.clear()
  }

}
