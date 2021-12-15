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

  }


}
