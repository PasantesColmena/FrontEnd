import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaproductosComponent } from './listaproductos/listaproductos.component';
import { CheckoutComponent } from './checkout/checkout.component';
// import { PdfMakerPruebaComponent } from '../pdfmaker-prueba/pdfmaker-prueba.component';

const routes: Routes = [
  { path: '', redirectTo : 'producto/lista/0', pathMatch: 'full'},
  { path: 'producto/lista', redirectTo : 'producto/lista/0', pathMatch: 'full'},
  { path: 'producto/lista/:productoId', component: ListaproductosComponent },
  { path: 'producto/checkout', component: CheckoutComponent },
  // { path: 'producto/pdf', component: PdfMakerPruebaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
