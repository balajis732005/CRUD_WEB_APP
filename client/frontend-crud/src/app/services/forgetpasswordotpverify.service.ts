import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForgetPasswordOtpVerifyModel } from '../models/forgetpasswordotpverify-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordotpverifyService {

  constructor(
    private httpClient : HttpClient
  ) { }

  private forgetPasswordOtpVerifyApiUrl : string = "http://localhost:8080/api/otpforgetpassword"

  public otpVerifyForForgetPassword(otpEmailVerify : ForgetPasswordOtpVerifyModel) : Observable<boolean> {
    return this.httpClient.post<boolean>(this.forgetPasswordOtpVerifyApiUrl,otpEmailVerify);
  }

}
