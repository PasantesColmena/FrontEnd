import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsuarioModule } from './paginaprincipal/usuario/usuario.module';
import { ClienteModule } from './clientes/clientes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    UsuarioModule,
    ClienteModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
