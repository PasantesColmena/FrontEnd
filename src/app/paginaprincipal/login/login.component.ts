import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";

import { JwtService } from '../../service/shared/jwt.service';
import { TokenAuthService } from '../../service/shared/token-auth.service';
import { AuthenticationStateService } from '../../service/shared/authentication-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  err = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public jwtService: JwtService,
    private tokenAuthService: TokenAuthService,
    private authenticationStateService: AuthenticationStateService,
  ) {

  }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: [],
      password: []
    })
   }

  submit() {
      console.log("Entro?");
      this.jwtService.logIn(this.signinForm.value).subscribe(
        res => {
          console.log(res);
          this.tokenStorage(res);
        },
        error => {
          console.log(error);
          this.err = error.error;
        },() => {
          this.authenticationStateService.setAuthState(true);
          this.signinForm.reset()
          this.router.navigate(['']);
        }
      );
  }

  tokenStorage(jwt){
    this.tokenAuthService.setTokenStorage(jwt.access_token);
  }

}
