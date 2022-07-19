import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

// creación de templates de dialogos
@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogData {
  constructor( public dialogRef: MatDialogRef<DialogData>,) {}
  onNoClick(): void {this.dialogRef.close(); window.location.reload();}
}

@Component({
  selector: 'dialog-correct',
  templateUrl: './dialogcorrect.component.html',
  styleUrls: ['./dialog.component.css'],
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
  styleUrls: ['./dialog.component.css'],
})
export class DialogIncorrect {
  constructor( public dialogRef: MatDialogRef<DialogIncorrect>,) {}
  onNoClick(): void {this.dialogRef.close();}
}



