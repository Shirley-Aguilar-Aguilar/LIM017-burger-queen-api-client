import { Component, OnInit, Input } from '@angular/core';
import { ServiceOutputService } from '../../../services/service-output.service';
import {RestService} from "../../../services/rest.service";
import Product from "../../interfaces/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() product:any;
  public cant:number = 0;

  products: Product[];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.restService.get('products')
      .subscribe(data => {
        this.products = data;
      })
  }

}
