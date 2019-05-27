import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { Book } from '../../models/book';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  book: Book;
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

    dialogRef.afterClosed().subscribe(book => {
      if(book) {
        this.book = book;
        this.searchText = book.title;
        console.log(`Dialog result: ${JSON.stringify(book)}`);
      }
    });
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  
}
