import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { User } from '../models/user.model.data';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 // private currentUserSubject: BehaviorSubject<User>;
  //public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
  }


  login(email: string, password: string){
    return this.http.post<any>(`${environment.urlBurguerQueen}/auth`, {email, password});
  }
}


