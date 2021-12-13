import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { JwtService } from '../../service/shared/jwt.service';
import { TokenAuthService } from '../../service/shared/token-auth.service';
import { AuthenticationStateService } from '../../service/shared/authentication-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  err = null;
  form: FormGroup;


  constructor(
    public router: Router,
    public jwtService: JwtService,
    private tokenAuthService: TokenAuthService,
    private authenticationStateService: AuthenticationStateService,
  ) {

  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
   }

  submit() {
      this.jwtService.logIn(this.form.value).subscribe(
        res => {
          console.log(res);
          this.tokenStorage(res);
        },
        error => {
          console.log(error);
          this.err = error.error;
        },() => {
          this.authenticationStateService.setAuthState(true);
          this.form.reset()
          this.router.navigate(['']);
        }
      );
  }

  tokenStorage(jwt){
    this.tokenAuthService.setTokenStorage(jwt.access_token);
  }

}
