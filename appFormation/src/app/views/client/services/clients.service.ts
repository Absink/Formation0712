import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
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

  public update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}clients/${client.id}`, client).pipe(
      map(datas => {
        return new Client(datas);
      })
    )
  }

  public changeState(client: Client, state: StateClient): Observable<Client> {
    const o = new Client({...client});
    o.state = state;
    return this.update(o);
  }

  public getFilterByCA(ca: number): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}clients`).pipe(
      map(datas => datas.filter(data => data.ca < ca).map(dataFilter => new Client(dataFilter)))
    );
  }
}
