import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


import { Producto } from '../../service/productos/productos';
import { ProductoService } from '../../service/productos/productos.service';
import { CartService } from '../../service/cart/cart.service';
import { CategoriaService } from '../../service/categorias/categorias.service';
import { Categorias } from '../../service/categorias/categorias';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
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
    public categoriaService: CategoriaService
  ) { }

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
      ++item.cantlleva;

    }
  }
  aumentarInventario(item:any){
    Swal.fire({
      title: 'Esta seguro de aumentar la cantidad del producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#178CA4',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(item);
        this.productoService
          .aumentar(item)
          .subscribe(
            response => {
              Swal.fire(
                'Cantidad Aumentada!'
              )
              window.location.reload();
            }
          );


      }
    })
  }
  disminuirInventario(item:any){
    Swal.fire({
      title: 'Esta seguro de disminuir la cantidad del producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#178CA4',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(item);
        this.productoService
          .disminuir(item)
          .subscribe(
            response => {
              Swal.fire(
                'Cantidad Disminuida!'
              )
              window.location.reload();
            },
            error => {
              console.log(error);
            }
          );


      }
    })
  }
  eliminar(id) {
    Swal.fire({
      title: 'Esta seguro de eliminar el producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#178CA4',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.productoService
          .delete(id)
          .subscribe(
            response => {
              Swal.fire(
                'Producto Eliminado!'
              )
              window.location.reload();
            },
            error => {
              console.log(error);
            }
          );


      }
    })


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

  /* Declara el evento scroll del HostListener */
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    /* NavBar */
    let element1 = document.querySelector('nav');
    /* Filtro */
    let element2 = document.getElementById('filtro');
    /* Dropdown  */
    let element3 = document.getElementById('dropdown');

    /* Condiciones para el cambio de color segun la altura del scroll */
    if (window.pageYOffset > 1) {
      element1.classList.add('bg-primary-g');
      element2.classList.add('dropdown-btn-g');
      element3.classList.add('dropdown-content-g-a');
    } else {
      element1.classList.remove('bg-primary-g');
      element2.classList.remove('dropdown-btn-g');
      element3.classList.remove('dropdown-content-g-a');
    }
  }

}
