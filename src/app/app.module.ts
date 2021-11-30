import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsuarioModule } from './usuario/usuario.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductoModule } from './producto/producto.module';
// import { PdfMakerPruebaComponent } from './pdfmaker-prueba/pdfmaker-prueba.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // PdfMakerPruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    ProductoModule,
    HttpClientModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
