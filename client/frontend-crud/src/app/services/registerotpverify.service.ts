import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterOtpVerifyModel } from '../models/registerotpverify-model';

@Injectable({
  providedIn: 'root'
})
export class RegisterotpverifyService {

  constructor(
    private httpClient : HttpClient
  ) { }

  private regiterOtpAPiUrl : string = "http://localhost:8080/api/otpverify";

  public registerOtpVerify(otpVerifyModel : RegisterOtpVerifyModel) : Observable<boolean> {
    return this.httpClient.post<boolean>(this.regiterOtpAPiUrl,otpVerifyModel);
  }

}
