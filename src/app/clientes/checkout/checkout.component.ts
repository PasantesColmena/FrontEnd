import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent {
  items = this.cartService.getItems();
  item = this.items[1];

  constructor(
    private cartService: CartService,
  ) {}

  deleteFromCart(item) { //Elimina el item dentro del cart
    this.cartService.deleteFromCart(item);
  }



}
