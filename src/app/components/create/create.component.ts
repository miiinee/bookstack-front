import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  searchKey: string;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.searchKey = result;
      console.log(`Dialog result: ${result}`);
    });
  }
}
