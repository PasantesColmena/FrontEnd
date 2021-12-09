import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdministrativoModule } from './administrativo/administrativo.module';
import { ClientesModule } from './clientes/clientes.module';
import { SuperusuarioModule } from './superusuario/superusuario.module';
import { PaginaPrincipalModule } from './paginaprincipal/paginaprincipal.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    AdministrativoModule,
    ClientesModule,
    SuperusuarioModule,
    PaginaPrincipalModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
