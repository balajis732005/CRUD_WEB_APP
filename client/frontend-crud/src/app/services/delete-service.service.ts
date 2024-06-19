import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DeleteService {

  constructor(
    private httpClient : HttpClient
  ) { }

  private deleteApiUrl! : string ;

  public userDelete(idToDelete : number) : Observable<boolean> {
    this.deleteApiUrl = "http://localhost:8080/api/delete/"+idToDelete;
    return this.httpClient.delete<boolean>(this.deleteApiUrl);
  }

}
