import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'usuario', redirectTo : 'usuario/create', pathMatch: 'full'},
  { path: 'usuario/create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
