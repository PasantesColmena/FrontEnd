import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperusuarioRoutingModule } from './superusuario-routing.module';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    ClientesComponent,
    FacturasComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    SuperusuarioRoutingModule
  ]
})
export class SuperusuarioModule { }
