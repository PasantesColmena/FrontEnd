import { Component, OnInit } from '@angular/core';

import { Facturas } from '../../service/facturas/facturas';
import { FacturasService } from '../../service/facturas/facturas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturas: Facturas[] = [];
  fact: Facturas | undefined;

  constructor(
    public facturasService: FacturasService,
  ) { }

  ngOnInit(): void {

    this.facturasService.getAll().subscribe((datau: Facturas[]) => {
      this.facturas = datau;

    })

  }
  eliminar(id){
    Swal.fire({
      title: 'Esta seguro de eliminar la factura?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#178CA4',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.facturasService
          .delete(id)
          .subscribe(
            response => {
              Swal.fire(
                'Factura Eliminada!'
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


}
