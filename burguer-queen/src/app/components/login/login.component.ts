import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private AuthenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login(form:NgForm){
    this.email =  form.value.email;
    this.password = form.value.password;
    this.postAuthenticated(this.email, this.password)
  }

  public postAuthenticated(email:string, password:string){
    this.AuthenticationService.login(email, password)
    .subscribe(response => {
      console.log("mostrando datos del servicio auth")
      console.log(JSON.stringify(response))
    })
  }

}
