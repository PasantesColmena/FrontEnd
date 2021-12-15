import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { JwtService } from '../../service/shared/jwt.service';
import { TokenAuthService } from '../../service/shared/token-auth.service';
import { AuthenticationStateService } from '../../service/shared/authentication-state.service';

import { Facturas } from '../../service/facturas/facturas';
import { FacturasService } from '../../service/facturas/facturas.service';

import { Producto } from '../../service/productos/productos';
import { ProductoService } from '../../service/productos/productos.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  err = null;
  form: FormGroup;
  isLoggedin: boolean;

  facturas: any[] = [];
  fact: Facturas | undefined;

  productos: Producto[] = [];
  item: Producto | undefined;


  constructor(
    public router: Router,
    public jwtService: JwtService,
    private tokenAuthService: TokenAuthService,
    private authenticationStateService: AuthenticationStateService,
    public facturasService: FacturasService,
    public productoService: ProductoService,

  ) {

  }

  ngOnInit() {
    /*Productos Lista*/
    this.productoService.getAll().subscribe((datap: any[]) => {
      this.productos = datap;
    });
    this.authenticationStateService.userAuthState.subscribe(res => {
      this.isLoggedin = res;
    });
    if (this.isLoggedin===true){
      this.authenticationStateService.setAuthState(false);
      this.tokenAuthService.destroyToken();
    }
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.facturasService.getAll().subscribe((datau: any[]) => {
      this.facturas = datau;
      console.log(this.facturas);
    });


  }

  submit() {
    this.jwtService.logIn(this.form.value).subscribe(
      res => {
        this.tokenStorage(res);
      },
      error => {
        console.log(error);
        this.err = error.error;
      }, () => {
        this.authenticationStateService.setAuthState(true);
        this.form.reset()
        this.router.navigate(['']);
      }
    );
  }

  tokenStorage(jwt) {
    this.tokenAuthService.setTokenStorage(jwt.access_token);
  }

}
