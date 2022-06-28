import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css']
})
export class CreateOrdersComponent implements OnInit {
  public listProducts:any = [];

  constructor(private RestService:RestService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(){
    this.RestService.get('products')
    .subscribe(response => {
      this.listProducts = response;
    })
  }
}
