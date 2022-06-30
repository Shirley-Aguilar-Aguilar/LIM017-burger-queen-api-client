import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model.data';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
   // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse('currentUser'));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

 /*  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  } */

  login(email: string, password: string){
    return this.http.post<any>(`${environment.urlBurguerQueen}/auth`, {email, password})
        .pipe(map((user) => {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            // user.authdata = window.btoa(email + ':' + password);
            // localStorage.setItem('currentUser', JSON.stringify(user));
            // localStorage.setItem('idUser', JSON.stringify(user.id));
            // this.currentUserSubject.next(user);
            return JSON.parse(JSON.stringify(user));
        }))
  }
}


