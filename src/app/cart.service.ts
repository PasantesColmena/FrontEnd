import { Injectable } from '@angular/core';
import { Producto } from './productos';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Producto[] = [];


  addToCart(product: Producto) {
    this.items.push(product);
  }


  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
