import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';

import { CreateComponent } from './create/create.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }

