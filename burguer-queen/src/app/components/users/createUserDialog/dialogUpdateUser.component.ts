import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RestService } from "src/app/services/rest.service";
import { DialogCorrect, DialogIncorrect } from "../../create-orders/create-orders.component";


export interface DataWorker {
  email: string;
  password: string;
  admin: boolean;
  userRol:number;
}

@Component({
  templateUrl: './dialogUpdateUser.component.html',
  styleUrls: ['./dialogCreateUser.component.css'],
})
export class DialogUpdateUser {
  constructor(
    public dialogRef: MatDialogRef<DialogUpdateUser>,
    private RestService: RestService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DataWorker,
    public dialog: MatDialog) {this.buildForm()}

  onNoClick(): void {this.dialogRef.close();}

  formCreateUser! : FormGroup;
  error: boolean = false;

  private buildForm() {
    this.formCreateUser = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email ] ],
      password: ['', [Validators.required, Validators.minLength(6) ] ],
      admin:['',],
      userRol:['',[Validators.required]]
    });
    this.formCreateUser.valid;
  }

   // conexión con clases para mostrar dialogos
   openDialogCorrect(): void {const dialogRef = this.dialog.open(DialogCorrect , {});}
   openDialogIncorrect(): void {const dialogRef = this.dialog.open(DialogIncorrect , {});}

  // validación de inputs
  get emailField(){ return this.formCreateUser.get('email') }
  get passwordField(){ return this.formCreateUser.get('password') }
  get nameField(){ return this.formCreateUser.get('name') }


    // creando usuario
    public updateUser(element:any){
      if(element.userRol===1){
        this.formCreateUser.value.admin=true;
      }else{ this.formCreateUser.value.admin=false; }
      if(this.formCreateUser.valid){
        this.RestService.put('users', this.formCreateUser.value,  element.id)
        .subscribe({
          next: data => {
            this.openDialogCorrect();
             this.formCreateUser.reset();
             window.location.reload();
          },
          error: error => {
            this.error = true;
            this.openDialogIncorrect();
          }
        })
      }
    }
}
