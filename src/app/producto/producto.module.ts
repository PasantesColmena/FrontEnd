import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { ListaproductosComponent } from './listaproductos/listaproductos.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { ProductoRoutingModule } from './producto-routing.module';


@NgModule({
  declarations: [
    ListaproductosComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
