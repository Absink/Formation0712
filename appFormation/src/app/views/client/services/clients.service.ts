import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/shared/models/client.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection: Observable<Client[]>;
  private url = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.url}clients`).pipe(
      map(datas => {
        return datas.map(obj => {
          return new Client(obj);
        })
      })
    )
  }


  // Getters and Setters
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }
}
