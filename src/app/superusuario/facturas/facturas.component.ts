import { Component, OnInit } from '@angular/core';

import { Facturas } from '../../service/facturas/facturas';
import { FacturasService } from '../../service/facturas/facturas.service';


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

    console.log(this.facturas);


  }



  mostrarFormEditar() {

    let formAdd = document.querySelector(".form-add");
    let formEdit = document.querySelector(".form-edit");




    // (<HTMLInputElement>document.getElementById('id_factura')).value = this.item_1.id.toString();
    // (<HTMLInputElement>document.getElementById('usuario_id')).value = this.item_3.usuario_id.toString();
    // (<HTMLInputElement>document.getElementById('tot')).value = this.item_3.tot.toString();

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
