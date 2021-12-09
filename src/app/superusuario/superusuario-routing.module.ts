import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes/clientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ProductosComponent } from './productos/productos.component';


const routes: Routes = [
  { path: 'superusuario/clientes', component: ClientesComponent, pathMatch: 'full'},
  { path: 'superusuario/usuarios', component: UsuariosComponent, pathMatch: 'full'},
  { path: 'superusuario/facturas', component: FacturasComponent, pathMatch: 'full'},
  { path: 'superusuario/productos', component: ProductosComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperusuarioRoutingModule { }
