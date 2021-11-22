import { Injectable } from '@angular/core';
import { Producto } from './productos';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Producto[] = [];
  totalPrecio = 0;
  totalCant = 0;

  addToCart(product: Producto) {
    this.items.push(product);
  }

  acumPrecio(price) {
    this.totalPrecio += price;
  }

  getTotalPrecio() {
    return this.totalPrecio;
  }

  acumCant(cant) {
    this.totalPrecio += cant;
  }

  getTotalCantidad() {
    return this.totalCant;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  deleteFromCart(itemid) {
    this.items.forEach( (item, index) => {
      if(item === itemid) this.items.splice(index,1);
    });
  }

}
