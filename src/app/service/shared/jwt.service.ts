import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  id:number;
  nom: string;
  email: string;
  ced: string;
  num: string;
  dir: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class JwtService {

  constructor(private http: HttpClient) { }
  logIn(user: Usuario): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/signin', user);
  }

  profile(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user');
  }

}
