import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestService } from 'src/app/services/rest.service';

export interface DialogData {
  delete: boolean;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public listWorkers:any = [];
  dataSource = this.listWorkers;
  displayedColumns: string[] = ['id', 'name','email', 'password', 'rol','update', 'delete'];

  formCreateUser! : FormGroup;
  error: boolean = false;

  constructor(
    private RestService: RestService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
    ) {  this.buildForm(); }


  ngOnInit(): void {
    this.getWorkers();
  }
  public getWorkers() {
    this.RestService.get('users')
    .subscribe((response) =>  this.dataSource = response)
  }

  private buildForm() {
    this.formCreateUser = this.formBuilder.group({
      name:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email ] ],
      password: ['', [Validators.required, Validators.minLength(6) ] ],
      admin:['',[Validators.required]],
      userRolId:['',[Validators.required]]
    });
    this.formCreateUser.valid;
  }

  save(event:Event) {
    event.preventDefault();
    if(this.formCreateUser.valid){
      this.createUser(this.formCreateUser.value)
    } else {
      this.formCreateUser.markAllAsTouched();
    }
  }
 // validación de inputs
  get emailField(){ return this.formCreateUser.get('email') }
  get passwordField(){ return this.formCreateUser.get('password') }
  get nameField(){ return this.formCreateUser.get('name') }

  // conexión con clases para mostrar dialogos
  openDialogCorrect(): void {const dialogRef = this.dialog.open(DialogCorrect , {});}
  openDialogIncorrect(): void {const dialogRef = this.dialog.open(DialogIncorrect , {});}

  // creando usuario
  public createUser(data:any){
    this.RestService.post('users',data)
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

  // actualizando usuario
  public updateUser(id:number){

  }
  public updateWorker(id: number, data:any){
    this.RestService.put('users', data,id)
    .subscribe({
      next: data => {this.openDialogCorrect();},
      error: error => {this.openDialogIncorrect();}
    })
  }

  // dialogos al usar el verbo delete
  openDialog(id:number): void {
    const dialogRef = this.dialog.open(DialogDataExampleDialog , {});
    dialogRef.afterClosed().subscribe(result => {
      if(result){this.deleteWorker(id);}
    });
  }

  // eliminando usuario
  public deleteWorker(id: number){
    this.RestService.delete('users', id)
    .subscribe({
      next: data => {this.openDialogCorrect()},
      error: error => {this.openDialogIncorrect();}
    })
  }
}

// creación de templates de dialogos
@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
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
      box-shadow:3px 3px 3px gray;
    }
    h1{font-family: 'Gill Sans MT', sans-serif;font-size:20px;}
    button{
      background-color:black;
      color:white;
      font-size:15px;
    }
    button:hover{background-color:red;}
  `]
})
export class DialogDataExampleDialog {
  constructor( public dialogRef: MatDialogRef<DialogDataExampleDialog>,) {}
  onNoClick(): void {this.dialogRef.close();}
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


