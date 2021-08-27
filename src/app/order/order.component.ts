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

  constructor() { }

  ngOnInit() {
  }

}
