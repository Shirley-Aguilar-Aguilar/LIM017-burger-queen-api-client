import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public host:string = 'http://localhost:8090/'
  constructor(private http: HttpClient) { }
  
  public get(url:string){
    const headers = new HttpHeaders().set("access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGVzIjp0cnVlLCJpYXQiOjE2NTYzODYzODksImV4cCI6MTY1NjM5NjQ2OX0.4wBXQHGK0rgEW3NKtCSURM-2va_puxIlhpBjqgT27Nw");
    return this.http.get(this.host+url, { headers });
  }
}
