import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';

@Component({
  selector: 'tm-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions : RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Crédito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
