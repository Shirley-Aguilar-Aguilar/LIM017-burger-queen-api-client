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




import { OrdersFirebaseService } from 'src/app/services/orders-firebase.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})

export class ListOrdersComponent implements OnInit {
  orders: any[];
  constructor(private orderFirebase : OrdersFirebaseService) {this.orders=[{}]}

  ngOnInit(): void {
    this.orderFirebase.getOrders().subscribe(orders => {
      this.orders = orders;
    })
  }

  changeStatus(index:number, status: string): Promise<any>{
    return this.orderFirebase.updateStatusOrder(this.orders[index],status);
  }
}