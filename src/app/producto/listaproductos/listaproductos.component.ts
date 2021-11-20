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

export class ListaproductosComponent implements OnInit{
  productos: Producto[] = [];
  item: Producto | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    public productoService: ProductoService
  ) { }

  addToCart(item: Producto) {
    this.cartService.addToCart(item);
    // window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {

    /*Consigue el id de la ruta*/
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productoId'));

    /*Productos Lista*/
    this.productoService.getAll().subscribe((data: Producto[])=>{
      this.productos = data;
      this.item = this.productos.find(
        (item) => item.id === productIdFromRoute
      );
    })
  }
}
