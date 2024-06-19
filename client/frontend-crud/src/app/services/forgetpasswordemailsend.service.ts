import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OnlyEmailModel } from '../models/emailenter-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordemailsendService {

  constructor(
    private httpClient : HttpClient
  ) { }

  private forgetPasswordEmailSendApiUrl : string = "http://localhost:8080/api/forgetpassword";

  public emailSendForForgetPassword(emailSendData : OnlyEmailModel) : Observable<boolean> {
    return this.httpClient.post<boolean>(this.forgetPasswordEmailSendApiUrl,emailSendData);
  }

}
