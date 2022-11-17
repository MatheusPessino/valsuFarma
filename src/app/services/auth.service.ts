import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Credentials } from '../models/credentials';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwt: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {}

  authenticate(cred: Credentials): Observable<HttpResponse<any>>{
    return this.http.post(`${API_CONFIG.baseUrl}/login`, cred,{
      observe: "response",
      responseType: "text"
    });
  }

  setToken(token: string | undefined): boolean {
    let flag: boolean = false;
    if(token != undefined) {
      localStorage.setItem("token", token);
      flag = true;
    }
    return flag;
  }

  isAuthenticated(): boolean {
    let flag: boolean = false;
    let token: string | null = localStorage.getItem('token')
    if (token != null) {
      flag = !this.jwt.isTokenExpired(token);
    }
    return flag;
  }

}
