import { Component, OnInit } from '@angular/core';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-pdfmaker-prueba',
  templateUrl: './pdfmaker-prueba.component.html',
  styleUrls: ['./pdfmaker-prueba.component.css']
})
export class PdfMakerPruebaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf() {
    const documentDefinition = {
      content: [
        {
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],

            body: [
              ['Factura Productos'],
              ['First', 'Second', 'Third', 'The last one'],
              ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
              [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4']
            ]
          }
        }
      ]
    };
    // pdfMake.createPdf(documentDefinition).download();
  }

  openPdf() {
    const documentDefinition = {
      content: [
        {
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],

            body: [
              ['First', 'Second', 'Third', 'The last one'],
              ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
              [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4']
            ]
          }
        }
      ]
    };
    // pdfMake.createPdf(documentDefinition).open();
  }

}
