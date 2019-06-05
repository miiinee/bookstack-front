import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import {MatDialog} from '@angular/material';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { Book } from '../../models/book';
import { BookComponent } from 'src/app/shared/components/book/book.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  @ViewChild('searchField') searchField: ElementRef;

  book: Book;
  searchText: string;

  isWriting = true;

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
        // console.log(`Dialog result: ${JSON.stringify(book)}`);
      }
    });
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onCreateBook(selectedBook: Book, review: string, phrase: string){

    if(!selectedBook) {
      alert('책을 선택해 주세요.');
      this.searchField.nativeElement.focus();
    }

    const book: Book = {
      uid : '',
      title : selectedBook.title,
      author : selectedBook.author,
      publisher : selectedBook.publisher,
      thumbnail : selectedBook.thumbnail,
      rating : selectedBook.rating,
      review,
      phrase,
      addUserUid : 'u0001',
      addDt : '',
      modDt : '',
      username : '',
      isFavorite : false,
      isBookmark : false,
      isSelected : false
    }
  }
}
