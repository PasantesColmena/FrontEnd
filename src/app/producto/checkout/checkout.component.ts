import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

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

  deleteFromCart(item) {
    this.cartService.deleteFromCart(item);
  }

  restarTotalPrecio(price) {
    this.cartService.resPrecio(price);
  }

  restarTotalCantidad(cant) {
    this.cartService.resCant(cant);

  }


}
