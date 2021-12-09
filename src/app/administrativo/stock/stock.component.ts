import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

import { Producto } from '../service/productos/productos';
import { ProductoService } from '../service/productos/productos.service';
import { CartService } from '../service/cart/cart.service';
import { CategoriaService } from '../service/categorias/categorias.service';
import { Categorias } from 'src/app/clientes/service/categorias/categorias';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent implements OnInit {

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

  acumularTotalCant(cant) {
    this.cartService.acumCant(cant);
  }

  disminuir(item: any) {
    if (item.cantlleva == undefined) {
      item.cantlleva = 0;
    } else if (item.cantlleva != undefined && item.cantlleva > 0) {
      --item.cantlleva;
    }
  }

  aumentar(item: any) {
    if (item.cantlleva == undefined) {
      item.cantlleva = 1;
    } else if (item.cantlleva != undefined) {
      if (item.cantlleva == item.cant)
        item.cantlleva=item.cantlleva;
      else
        ++item.cantlleva;

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
