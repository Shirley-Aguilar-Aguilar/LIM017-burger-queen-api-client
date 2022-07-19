import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { navTypeProducts } from './nav-type-products';
import { ServiceOutputService } from 'src/app/services/service-output.service';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css']
})
export class CreateOrdersComponent implements OnInit {
  public listProducts:any = [];
  public listProductsComplete:any = [];
  public navData= navTypeProducts;
  formCreateOrder! : FormGroup;

  constructor(private RestService:RestService,
    private formBuilder: FormBuilder,
    private serviceOutput: ServiceOutputService,
    ) {  this.buildForm(); }

  ngOnInit(): void {
    this.getProducts();
    this.serviceOutput.triggerOutput.subscribe(data => {
      if(!this.formCreateOrder.value.products.includes(data)){
        this.formCreateOrder.value.products.push(data);
        console.log(data);
      }
      else if (data.qty === 0) {
        this.formCreateOrder.value.products = this.formCreateOrder.value.products.filter((product:any) => product.id!==data.id);
      }
    })
  }

  public getProducts(){
    this.RestService.get('products')
    .subscribe(response => {
      this.listProducts = response;
      this.listProductsComplete = response;
    })
  }

  public filterProducts(type:string){
    if(type == ''){
      this.listProducts = this.listProductsComplete;
    } else {
      this.listProducts = this.listProductsComplete.filter((product: any)=> product.type == type);
    }
  }

   // validación de inputs
   get clientField(){ return this.formCreateOrder.get('client') }

   private buildForm() {
    this.formCreateOrder = this.formBuilder.group({
      client:['', [Validators.required]],
      userId:[sessionStorage.getItem('userId'), [Validators.required]],
      status:['pending', [Validators.required]],
      products:[[]]
    });
    this.formCreateOrder.valid;
  }

   save(event:Event) {
    event.preventDefault();
    if(this.formCreateOrder.valid){
      alert('tienes que guardar');
      console.log(this.formCreateOrder.value)
     // this.createUser(this.formCreateUser.value)
    } else {
      this.formCreateOrder.markAllAsTouched();
    }
  }
}
