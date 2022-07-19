import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { RestService } from "src/app/services/rest.service";
import { DialogCorrect, DialogIncorrect } from "../../create-orders/create-orders.component";


@Component({
  templateUrl: './dialogCreateUser.component.html',
  styleUrls: ['./dialogCreateUser.component.css'],
})
export class DialogCreateUser {
  constructor(
    public dialogRef: MatDialogRef<DialogCreateUser>,
    private RestService: RestService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog) {this.buildForm()}

  onNoClick(): void {this.dialogRef.close();}

  formCreateUser! : FormGroup;
  error: boolean = false;

  private buildForm() {
    this.formCreateUser = this.formBuilder.group({
      name:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email ] ],
      password: ['', [Validators.required, Validators.minLength(6) ] ],
      admin:['',],
      userRolId:['',[Validators.required]]
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

  save(event:Event) {
    event.preventDefault();
    if(this.formCreateUser.valid){
      console.log(this.formCreateUser.value)
      this.createUser(this.formCreateUser.value)
    } else {
      this.formCreateUser.markAllAsTouched();
    }
  }

    // creando usuario
    public createUser(element:any){
      if(element.userRol===1){
        this.formCreateUser.value.admin=true;
      }else{ this.formCreateUser.value.admin=false; }
      console.log(element)
      this.RestService.post('users',element)
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
