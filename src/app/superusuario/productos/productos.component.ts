import { Component, OnInit } from '@angular/core';
import { Producto } from '../../service/productos/productos';
import { ProductoService } from '../../service/productos/productos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
  item: Producto | undefined;


  constructor(
    public productoService: ProductoService,

  ) { }

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
            }
          );
      }
    })
  }

  ngOnInit(): void {

    this.productoService.getAll().subscribe((datau: Producto[]) => {
      this.productos = datau;
    })

  }



  mostrarFormEditar(productoID) {

    let formAdd = document.querySelector(".form-add");
    let formEdit = document.querySelector(".form-edit");

    this.item = this.productos.find(
      (item) => item.id === productoID
    );


    // (<HTMLInputElement>document.getElementById('id')).value = this.item.id.toString();
    (<HTMLInputElement>document.getElementById('nom')).value = this.item.nom.toString();
    (<HTMLInputElement>document.getElementById('desc')).value = this.item.desc.toString();
    (<HTMLInputElement>document.getElementById('pre_uni')).value = this.item.pre_uni.toString();
    (<HTMLInputElement>document.getElementById('cant')).value = this.item.cant.toString();


    formEdit.classList.add('d-block');
    formAdd.classList.add('d-none');

    formAdd.classList.remove('d-block');
    formEdit.classList.remove('d-none');



  }

  mostrarFormAdd() {
    let formAdd = document.querySelector(".form-add");
    let formEdit = document.querySelector(".form-edit");


    formEdit.classList.add('d-none');
    formAdd.classList.add('d-block');

    formEdit.classList.remove('d-block');
    formAdd.classList.remove('d-none');
  }

}
