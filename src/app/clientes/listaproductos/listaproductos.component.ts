import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

import { Usuario } from 'src/app/service/usuarios/usuario';
import { Producto } from '../../service/productos/productos';
import { ProductoService } from '../../service/productos/productos.service';
import { CartService } from '../../service/cart/cart.service';
import { CategoriaService } from '../../service/categorias/categorias.service';
import { Categorias } from '../../service/categorias/categorias';
import { JwtService } from 'src/app/service/shared/jwt.service';
import { UsuarioService } from 'src/app/service/usuarios/usuario.service';

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
  user: Usuario;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    public productoService: ProductoService,
    public categoriaService: CategoriaService,
    public jwtService: JwtService

  ) { }

  addToCart(item: Producto, productoCantlleva) {//Añade productos al cart
    if (productoCantlleva == 0) {  //Si no hay disponible o la cantidad es 0 no lo hace
      Swal.fire('Cantidad no Valida', '', 'error');

    } else {
      this.cartService.addToCart(item);
      Swal.fire("Producto Agregado", "", "success");
    }

  }

  acumularTotalPrecio(price, cant) {
    this.cartService.acumPrecio(price, cant);
  }

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
        item.cantlleva = item.cantlleva;
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

    this.jwtService.profile().subscribe((res: any) => {
      this.user = res;
      console.log(this.user)
    })

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

  /* Declara el evento scroll del HostListener */
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    /* NavBar */
    let element1 = document.querySelector('nav');
    /* Icon Carrito */
    let element3 = document.getElementById('icon');

    /* Condiciones para el cambio de color segun la altura del scroll */
    if (window.pageYOffset > 1) {
      element1.classList.add('bg-primary-g');

      element3.classList.add('btn-color-icon');
    } else {
      element1.classList.remove('bg-primary-g');
      element3.classList.remove('btn-color-icon');
    }
  }

}
