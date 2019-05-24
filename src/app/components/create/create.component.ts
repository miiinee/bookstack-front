import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

import { DialogComponent } from '../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  searchText: string;

  isWriting: boolean = true;

  constructor(
    public dialog: MatDialog,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.searchText = result;
      console.log(`Dialog result: ${result}`);
    });
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  
}
