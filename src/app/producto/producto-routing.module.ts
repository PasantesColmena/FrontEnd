import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaproductosComponent } from './listaproductos/listaproductos.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'producto/lista', component: ListaproductosComponent },
  { path: 'producto/lista/:productoId', component: ListaproductosComponent },
  { path: 'producto/checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
