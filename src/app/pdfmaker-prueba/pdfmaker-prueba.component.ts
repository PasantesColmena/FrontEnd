import { Component, OnInit } from '@angular/core';
import { Facturas } from '../producto/service/facturas/facturas';
import { FacturasService } from '../producto/service/facturas/facturas.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-pdfmaker-prueba',
  templateUrl: './pdfmaker-prueba.component.html',
  styleUrls: ['./pdfmaker-prueba.component.css']
})
export class PdfMakerPruebaComponent implements OnInit {


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
      this.facturas = datac;
    })
    console.log(Object.assign({}, this.facturas));
  }

  downloadPdf() {
    this.desglose = this.facturas.desglose;
    this.nom = this.facturas.usuario.nom;
    for (let index = 0; index < this.desglose.length; index++) {
      const element = this.desglose[index];
      this.desg_can[index + 1] = [element.cantidad];
      this.desg_pro[index + 1] = [element.producto.nom];
      this.desg_pre[index + 1] = [element.producto.pre_uni];
      this.desg_sub[index + 1] = [element.pre_tot];
      this.mon_tot += element.pre_tot;

    }
    const documentDefinition = {
      content: [
        { text: 'La Ficticia', style: 'Tit' },
        {
          text: [
            { text: 'Número Factura: ', style: 'Cue' },
            { text: this.facturas.id, style: 'Cue' }
          ]
        },
        {
          text: [
            { text: '\n Cliente: ', style: 'Cue' },
            { text: this.nom, style: 'Cue' }
          ]
        },
        {
          text: [
            { text: 'Dirección: ', style: 'Cue' },
            { text: this.facturas.usuario.dir, style: 'Cue' }
          ]
        },

        { text: '\n', style: 'Cue' },
        {
          table: {
            headerRows: 1,
            widths: ['*', 100, 100, '*'],

            body: [
              ['Cantidad', 'Descripcion', 'Precio Unitario', 'SubTotal'],
              [this.desg_can, this.desg_pro, this.desg_pre, this.desg_sub],
              [{ text: '-', alignment: 'center' }, { text: '-', alignment: 'center' }, { text: '-', alignment: 'center' }, { text: '-', alignment: 'center' }],
              ['', '', 'Precio total:', this.mon_tot]
            ]
          }
        }
      ],
      styles: {
        Tit: {
          fontSize: 18,
          alignment: 'center',
          bold: true
        },
        Cue: {
          fontSize: 14,
          alignment: 'left',
          bold: false
        }
      }
    };
    pdfMake.createPdf(documentDefinition).download();
  }

  openPdf() {
    this.desglose = this.facturas.desglose;
    this.nom = this.facturas.usuario.nom;
    for (let index = 0; index < this.desglose.length; index++) {
      const element = this.desglose[index];
      this.desg_can[index + 1] = [element.cantidad];
      this.desg_pro[index + 1] = [element.producto.nom];
      this.desg_pre[index + 1] = [element.producto.pre_uni];
      this.desg_sub[index + 1] = [element.pre_tot];
      this.mon_tot += element.pre_tot;

    }
    const documentDefinition = {
      content: [
        { text: 'La Ficticia', style: 'Tit' },
        {
          text: [
            { text: 'Número Factura: ', style: 'Cue' },
            { text: this.facturas.id, style: 'Cue' }
          ]
        },
        {
          text: [
            { text: '\n Cliente: ', style: 'Cue' },
            { text: this.nom, style: 'Cue' }
          ]
        },
        {
          text: [
            { text: 'Dirección: ', style: 'Cue' },
            { text: this.facturas.usuario.dir, style: 'Cue' }
          ]
        },

        { text: '\n', style: 'Cue' },
        {
          table: {
            headerRows: 1,
            widths: ['*', 100, 100, '*'],

            body: [
              ['Cantidad', 'Descripcion', 'Precio Unitario', 'SubTotal'],
              [this.desg_can, this.desg_pro, this.desg_pre, this.desg_sub],
              [{ text: '-', alignment: 'center' }, { text: '-', alignment: 'center' }, { text: '-', alignment: 'center' }, { text: '-', alignment: 'center' }],
              ['', '', 'Precio total:', this.mon_tot]
            ]
          }
        }
      ],
      styles: {
        Tit: {
          fontSize: 18,
          alignment: 'center',
          bold: true
        },
        Cue: {
          fontSize: 14,
          alignment: 'left',
          bold: false
        }
      }
    };
    pdfMake.createPdf(documentDefinition).open();
  }

}
