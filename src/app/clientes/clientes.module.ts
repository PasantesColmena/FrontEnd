import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { ListaproductosComponent } from './listaproductos/listaproductos.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PdfComponent } from './pdf/pdf.component';


import { ClientesRoutingModule } from './clientes-routing.module';


@NgModule({
  declarations: [
    ListaproductosComponent,
    CheckoutComponent,
    NavbarComponent,
    PdfComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ClientesRoutingModule
  ]
})
export class ClienteModule { }
