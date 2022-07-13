import { Component, OnInit, Input } from '@angular/core';
import { ServiceOutputService } from '../../../services/service-output.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() product:any;
  public cant:number = 0;
  constructor(private serviceOutput: ServiceOutputService) { }

  ngOnInit(): void {
  }

  public addOrder(product:any){
    product.productid = product.id;
    product.qty = this.cant;
    this.serviceOutput.triggerOutput.emit(product);
  }

}
