import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: 'admin/stock', component: StockComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AdministrativoRoutingModule { }
