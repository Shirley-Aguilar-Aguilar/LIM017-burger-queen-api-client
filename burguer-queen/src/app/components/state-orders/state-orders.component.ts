import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-state-orders',
  templateUrl: './state-orders.component.html',
  styleUrls: ['./state-orders.component.css']
})
export class StateOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


