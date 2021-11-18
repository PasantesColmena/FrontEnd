import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Inicio Serviciosios
import { CargarScriptsService } from "./cargar-scripts.service";
//Fin Servicios

import { UsuarioModule } from './usuario/usuario.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductoModule } from './producto/producto.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    ProductoModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
