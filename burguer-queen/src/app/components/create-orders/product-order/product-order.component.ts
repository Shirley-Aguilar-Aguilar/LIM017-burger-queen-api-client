import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit {
  @Input() product:any;
  constructor() { }

  ngOnInit(): void {
  }

}
