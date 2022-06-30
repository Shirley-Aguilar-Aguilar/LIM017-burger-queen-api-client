import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navData = navbarData;

}
