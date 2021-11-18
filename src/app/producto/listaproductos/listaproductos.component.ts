import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product,products } from '../../products';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})

export class ListaproductosComponent{
  products = products;
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product : Product) {
    this.cartService.addToCart(product);
    window.alert('Su producto a sido añadido al carrito!');
  }
}
