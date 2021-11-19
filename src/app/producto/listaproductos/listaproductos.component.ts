import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Producto } from '../../productos';
import { ProductoService } from '../../productos.service';
import { CartService } from '../../cart.service';


@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})

export class ListaproductosComponent{
  productos: Producto[] = [];


  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    public productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.productoService.getAll().subscribe((data: Producto[])=>{
      this.productos = data;
      console.log(this.productos);
    })
  }

  addToCart(product : Producto) {
    this.cartService.addToCart(product);
    window.alert('Su producto a sido añadido al carrito!');
  }
}
