import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './productos';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Producto[] = [];

  constructor(private http: HttpClient) {}

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
