import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { navTypeProducts } from './nav-type-products';
import { ServiceOutputService } from 'src/app/services/service-output.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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
    public dialog: MatDialog,
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
      status:[1, [Validators.required]],
      products:[[]]
    });
    this.formCreateOrder.valid;
  }

  openDialogCorrect(): void {const dialogRef = this.dialog.open(DialogCorrect , {});}
  openDialogIncorrect(): void {const dialogRef = this.dialog.open(DialogIncorrect , {});}

   save(event:Event) {
    event.preventDefault();
    if(this.formCreateOrder.valid){
      console.log(this.formCreateOrder.value)

      this.RestService.post('orders',this.formCreateOrder.value)
        .subscribe({
          next: data => {
            this.openDialogCorrect();
            this.formCreateOrder.reset();
            window.location.reload();
          },
          error: error => {
            this.openDialogIncorrect();
          }
        })

    } else {
      this.formCreateOrder.markAllAsTouched();
    }
  }
}

@Component({
  selector: 'dialog-correct',
  templateUrl: './dialogcorrect.component.html',
  styles: [`
    :host {
      display: block;
      border:0;
      font-size:20px;
      text-align:center;
      border-radius: 8px;
      font-family: 'Gill Sans MT', sans-serif;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
    }
    button {
      background-color:black;
      color:white;
      font-size:15px;
    }
    button:hover{background-color:red;}
  `]
})

export class DialogCorrect {
  constructor( public dialogRef: MatDialogRef<DialogCorrect>,) {}
  onNoClick(): void {
    this.dialogRef.close();
    window.location.reload();
  }
}

@Component({
  selector: 'dialog-incorrect',
  templateUrl: './dialogincorrect.component.html',
  styles: [`
    :host {
      display: block;
      border:0;
      font-size:20px;
      text-align:center;
      border-radius: 8px;
      font-family: 'Gill Sans MT', sans-serif;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
    }
    button{
      background-color:black;
      color:white;
      font-size:15px;
    }
    button:hover{background-color:red;}
  `]
})
export class DialogIncorrect {
  constructor( public dialogRef: MatDialogRef<DialogIncorrect>,) {}
  onNoClick(): void {this.dialogRef.close();}
}
