import { CartItem } from './../restaurants/restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.services';
import { RadionOption } from './../shared/radio/radio-option.model';
import { Component, OnInit, Input } from '@angular/core';
import { Order, orderItem } from './order.model';
import 'rxjs/add/operator/map'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOption: RadionOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartao Debito', value: 'DEB'},
    {label: 'Cartao Refeicao', value: 'REF'}
  ]

  @Input() items: CartItem[]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.orderService.CartItems()
  }

  increaseQtd(item: CartItem){
    this.orderService.increaseQtd(item)
  }

  decreaseQtd(item: CartItem){
    this.orderService.decreaseQtd(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item:CartItem)=> new orderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order)
      .subscribe( (orderId: string) => {
        console.log(`Compra concluida: ${orderId}`)
        this.orderService.clear()
      })
  }
}
