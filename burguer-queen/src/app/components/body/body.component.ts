import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private RestService: RestService) { }
  sessionId = sessionStorage.getItem('userId')
  id = this.sessionId !== null ? parseInt(this.sessionId) : 0 ;

  ngOnInit(): void {
    this.getUser(this.id);
  }

  public getUser(id: number){
    this.RestService.getById('users', id)
    .subscribe({
      next: data => {
         console.log(data)
         console.log(JSON.stringify(data.name))
         sessionStorage.setItem('rol', JSON.stringify(data.userRol))
        // sessionStorage.setItem('rolUser', JSON.stringify(data.userRol))

      },
      error: error => {
         console.log(error)
      }
    })
  }

}
