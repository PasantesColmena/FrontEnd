import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AdministrativoRoutingModule } from './administrativo-routing.module';

import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    StockComponent,
  ],
  imports: [
    CommonModule,
    AdministrativoRoutingModule
  ]
})
export class AdministrativoModule { }
