import { CartItem } from './../restaurants/restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.services';
import { RadionOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOption: RadionOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartao Debito', value: 'DEB'},
    {label: 'Cartao Refeicao', value: 'REF'}
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems(): CartItem[] {
    return this.orderService.CartItems()
  }

  increaseItem(item: CartItem){
    this.orderService.increaseQtd(item)
  }

  decreaseItem(item: CartItem){
    this.orderService.decreaseQtd(item)
  }

  removeItem(item: CartItem){
    this.orderService.remove(item)
  }
}
