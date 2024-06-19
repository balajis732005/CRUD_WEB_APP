import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationModel } from '../models/registration-model';
import { ApiCheck } from '../models/check-model';

@Injectable({
  providedIn: 'root'
})

export class RegistrationServiceService {

  constructor(
    private httpClient : HttpClient
  ) { }

  private registrationApiUrl : string = "http://localhost:8080/api/register";

  public userRegistration(registerData : RegistrationModel) : Observable<ApiCheck> {
    return this.httpClient.post<ApiCheck>(this.registrationApiUrl,registerData);
  }

}
