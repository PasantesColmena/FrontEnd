import { Component } from '@angular/core';


import { CartService } from '../../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  items = this.cartService.getItems();
  constructor(
    private cartService: CartService
  ) { }
}
