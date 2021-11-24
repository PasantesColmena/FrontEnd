import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Producto } from '../../productos';
import { ProductoService } from '../../productos.service';
import { CartService } from '../../cart.service';
import { CategoriaService } from '../../categorias.service';
import { Categorias } from 'src/app/categorias';


@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})

export class ListaproductosComponent implements OnInit {
  productos: Producto[] = [];
  categorias: Categorias[] = [];
  item: Producto | undefined;
  itemc: Categorias | undefined;


  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    public productoService: ProductoService,
    public categoriaService: CategoriaService,

  ) { }

  addToCart(item: Producto) {
    this.cartService.addToCart(item);
    window.alert('Your product has been added to the cart!');
    console.log(item.pre_uni);
  }

  acumularTotalPrecio(price) {
    this.cartService.acumPrecio(price);
  }

  acumularTotalCant(cant) {
    this.cartService.acumCant(cant);
  }



  disminuir(item: any) {
    if (item.cant == undefined) {
      item.cant = 0;
    } else if (item.cant != undefined && item.cant > 0) {
      --item.cant;
    }
  }

  aumentar(item: any) {
    if (item.cant == undefined) {
      item.cant = 1;
    } else if (item.cant != undefined) {
      ++item.cant;
    }
  }

  getAllCat(id) {
    this.productoService.getAllCat(id).subscribe((datap: Producto[]) => {
      this.productos = datap;
    })
  }

  getAll() {
    this.productoService.getAll().subscribe((datap: Producto[]) => {
      this.productos = datap;
    })
  }


  ngOnInit(): void {

    /*Consigue el id de la ruta*/
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productoId'));

    /* Categorias Lista */
    this.categoriaService.getCategorias().subscribe((datac: Categorias[]) => {
      this.categorias = datac;
    })

    /*Productos Lista*/
    this.productoService.getAll().subscribe((datap: Producto[]) => {
      this.productos = datap;
      this.item = this.productos.find(
        (item) => item.id === productIdFromRoute
      );
    })


  }
}
