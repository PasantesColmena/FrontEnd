import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuarios/usuario.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CartService } from '../../service/cart/cart.service';
import { FacturasService } from '../../service/facturas/facturas.service';
import { Desglose, Facturas } from '../../service/facturas/facturas';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  fact: Facturas[] = [];
  desg: Desglose[] = [];
  items = this.cartService.getItems();
  form: FormGroup;


  constructor(
    public usuarioService: UsuarioService,
    private router: Router,
    private cartService: CartService,
    private facturaService: FacturasService
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      email: new FormControl('', [Validators.required]),
      ced: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      num: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      dir: new FormControl('', [Validators.required, Validators.pattern('^[0-9a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+')]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
    this.usuarioService.createUsuario(this.form.value).subscribe(res => {
      console.log('Usuario creado correctamente!');
      this.router.navigate(['paginaprincipal/login']);
    })
    // this.fact['usuario_id'] = 0;
    // this.fact['tot'] = this.cartService.getTotalPrecio();
    // this.fact.toString();
    // console.log(Object.assign({}, this.fact));
    // this.facturaService.createFactura(Object.assign({}, this.fact)).subscribe(res => {
    //   Swal.fire("Su compra esta siendo procesada...", "", "info");
    //   for (let item = 0; item < this.items.length; item++) {
    //     const element = this.items[item];
    //     this.desg['facturas_id'] = 0;
    //     this.desg['producto_id'] = element.id;
    //     this.desg['cantidad'] = element.cantlleva;
    //     this.desg['pre_tot'] = (element.pre_uni * element.cantlleva);
    //     this.facturaService.createDesglose(Object.assign({}, this.desg)).subscribe(res => {
    //       console.log('Desglose creado correctamente!');
    //       if (item===this.items.length-1){
    //         Swal.fire("Su compra ha sido realizada", "", "success");
    //         this.cartService.clearCart();
    //         this.router.navigate(['producto/pdf']);
    //       }
    //     })
    //   }
    //   console.log('Factura creada correctamente!');
    // })
  }
}