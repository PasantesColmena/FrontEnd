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

  acumPrecio(price,cant) {
    this.totalPrecio += price * cant;
  }

  getTotalPrecio() {
    return this.totalPrecio;
  }

  acumCant(cant) {
    this.totalCant += cant;
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
    this.totalPrecio = 0;
    this.totalCant = 0;
  }

  deleteFromCart(itemid) {
    this.items.forEach( (item, index) => {
      if(item === itemid) this.items.splice(index,1);
    });
  }

}
