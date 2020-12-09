import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private pCollection: Observable<User[]>;
  private urlApi: string = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<User[]>(`${this.urlApi}users`).pipe(
      map(datas => {
        return datas.map(objJson => {
          return new User(objJson);
        })
      })
    )
  }

  public get collection(): Observable<User[]> {
    return this.pCollection
  }

  public set collection(col: Observable<User[]>) {
    this.pCollection = col;
  }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlApi}users`).pipe(
      map(datas => {
        return datas.map(objJson => {
          return new User(objJson);
        })
      })
    )
  }

  // Get by username + pass
  public getByUsernameAndPassword(user: User): Observable<User> {
    return this.http.get<User>(`${this.urlApi}users?username=${user.username}&password=${user.password}`).pipe(
      map(data => { return new User(data)})
    )
  }


}
