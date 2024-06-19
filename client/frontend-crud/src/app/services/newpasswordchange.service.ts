import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewPasswordChangeModel } from '../models/passwordchange-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewpasswordchangeService {

  constructor(
    private httpClient : HttpClient
  ) { }

  private newPasswordChangeApiUrl : string  = "http://localhost:8080/api/upadatepassword";

  public updatePasswordForForgetPassword(passwordChange : NewPasswordChangeModel) : Observable<boolean> {
    return this.httpClient.post<boolean>(this.newPasswordChangeApiUrl,passwordChange);
  }

}
