import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public host:string = 'http://localhost:8080/'
  constructor(private http: HttpClient) { }
  
  public get(url:string){
    const headers = new HttpHeaders().set("access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGVzIjp0cnVlLCJpYXQiOjE2NTYzOTMwNTcsImV4cCI6MTY1NjQwMzEzN30.JAXLQjPvikJ8r63bFoVLraKbyxfcEetMpevsA5h2Da4");
    return this.http.get(this.host+url, { headers });
  }
}
