import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { }
  public host:string = environment.urlBurguerQueen;
  token = sessionStorage.getItem('token');


  // obtener usuario por id
  public getUserById(id:number){
    const headers = new HttpHeaders().set('access-token',this.token!.replace(/['"]+/g, ''));
    return this.http.get<any>(`${this.host}/users/${id}`, { headers })
  }


  // obtener producto
  public get(url:string){
    const headers = new HttpHeaders().set("access-token", this.token!.replace(/['"]+/g, ''));
    return this.http.get(this.host+url, { headers });
  }
}
