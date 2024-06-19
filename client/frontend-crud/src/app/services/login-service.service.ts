import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login-model';
import { Observable } from 'rxjs';
import { EntityModel } from '../models/entity-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient : HttpClient
  ) { }

  private loginApiUrl : string = "http://localhost:8080/api/login";

  public userLogin(loginData : LoginModel) : Observable<EntityModel> {
    return this.httpClient.post<EntityModel>(this.loginApiUrl,loginData);
  }

}
