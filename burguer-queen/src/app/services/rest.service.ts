import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  public host:string = environment.urlBurguerQueen;


  constructor(private http: HttpClient) { }
  // obtener usuario por id
  public getUserById(id:string){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set("access-token",token!);
    return this.http.get(`${this.host}/users/${id}`, {headers})
  }


  // obtener producto
  public get(url:string){
    const headers = new HttpHeaders().set("access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMTFAZ21haWwuY29tIiwicm9sZXMiOnRydWUsImlhdCI6MTY1NjQ1MjMyMywiZXhwIjoxNjU2NDYyNDAzfQ.WqFBs4SVovNqOly0qitvSwOs7kGbTmRn5arRfL1EQCo");
    return this.http.get(this.host+url, { headers });
  }
}
