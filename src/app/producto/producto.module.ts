import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { ListaproductosComponent } from './listaproductos/listaproductos.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { NavbarComponent } from '../navbar/navbar.component';

import { ProductoRoutingModule } from './producto-routing.module';


@NgModule({
  declarations: [
    ListaproductosComponent,
    CheckoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
