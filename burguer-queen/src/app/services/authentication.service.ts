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
  }

  login(email: string, password: string){
    return this.http.post<any>(`${environment.urlBurguerQueen}/auth`, {email, password})
        .pipe(map((user) => {
            return JSON.parse(JSON.stringify(user));
        }))
  }
}


