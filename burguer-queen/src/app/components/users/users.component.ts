import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestService } from 'src/app/services/rest.service';
import { DialogCorrect, DialogIncorrect } from '../create-orders/create-orders.component';
import { DialogData } from '../dialogs/dialog.component';
import { DialogCreateUser } from './createUserDialog/dialogCreateUser.component';
import { DialogUpdateUser } from './createUserDialog/dialogUpdateUser.component';



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
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getWorkers();
  }
  public getWorkers() {
    this.RestService.get('users')
    .subscribe((response) =>  this.dataSource = response)
  }


 // validación de inputs
  get emailField(){ return this.formCreateUser.get('email') }
  get passwordField(){ return this.formCreateUser.get('password') }
  get nameField(){ return this.formCreateUser.get('name') }

  // conexión con clases para mostrar dialogos
  openDialogCorrect(): void {const dialogRef = this.dialog.open(DialogCorrect , {});}
  openDialogIncorrect(): void {const dialogRef = this.dialog.open(DialogIncorrect , {});}

  createNewUser():void{
    const dialogRef = this.dialog.open(DialogCreateUser , {});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  // actualizando usuario
  public updateUser(element:any){
    const dialogRef = this.dialog.open(DialogUpdateUser , {
      data: {id:element.id, email : element.email, password : element.password, admin : element.admin, userRol : element.userrol.id,}
    });
    dialogRef.afterClosed().subscribe(result => {
    });

  }

  // dialogos al usar el verbo delete
  openDialog(id:number): void {
    const dialogRef = this.dialog.open(DialogData, {});
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

