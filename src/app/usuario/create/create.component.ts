import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CartService } from 'src/app/cart.service';
import { FacturasService } from 'src/app/facturas.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup

  constructor( public usuarioService: UsuarioService,
    private router: Router,
    private cartService: CartService,
    private facturaService: FacturasService)
  {
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      nom:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      ced: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      num: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      dir: new FormControl('', [ Validators.required, Validators.pattern('^[0-9a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
    });
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.usuarioService.createUsuario(this.form.value).subscribe(res => {
         console.log('Usuario creado correctamente!');
    })
    this.facturaService.createFactura(this.form.value).subscribe(res => {
      console.log('Usuario creado correctamente!');
 })


  }

}

