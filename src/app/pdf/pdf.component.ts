import { Component, OnInit } from '@angular/core';
import { Facturas } from '../producto/service/facturas/facturas';
import { FacturasService } from '../producto/service/facturas/facturas.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { title } from 'process';
{ { } }
//Igualar las fuentes para el pdf
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})

export class PdfComponent implements OnInit {

  //Variables de tipo any
  facturas: any[] = [];
  desglose: any[] = [];
  desg_can: any[] = [];
  desg_pro: any[] = [];
  desg_pre: any[] = [];
  desg_sub: any[] = [];
  nom: any[] = [];
  mon_tot = 0;



  constructor(public facturasService: FacturasService) { }

  ngOnInit(): void {
    this.facturasService.getLast().subscribe((datac: any[]) => {
      this.facturas[0] = datac;
      this.desglose = this.facturas[0].desglose;
      for (let index = 0; index < this.desglose.length; index++) {
        const element = this.desglose[index];
        this.mon_tot += element.pre_tot;
      }

      console.log(this.facturas[0]);
    })

  }
}
