import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityModel } from '../models/entity-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(
    private httpClient : HttpClient
  ) { }

  private updateApiUrl : string ="http://localhost:8080/api/update";

  public userUpdate(updateData : EntityModel) : Observable<EntityModel> {
    return this.httpClient.put<EntityModel>(this.updateApiUrl,updateData);
  }

}
