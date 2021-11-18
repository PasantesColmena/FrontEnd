import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [
  { path: '', redirectTo : 'usuario/create', pathMatch: 'full'},
  // { path: 'usuario', redirectTo : 'usuario/create', pathMatch: 'full'},
  { path: 'usuario/create', component: CreateComponent },
  { path: 'usuario/reporte', component: ReporteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
