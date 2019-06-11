import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

import { BookstackService } from '../../services/bookstack.service';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { Book } from '../../models/book';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  @ViewChild('review') review: ElementRef;
  @ViewChild('phrase') phrase: ElementRef;

  book: Book;
  searchText: string;

  isWriting = true;
  isSpinner = false;

  constructor(
    public dialog: MatDialog,
    private ngZone: NgZone,
    private router: Router,
    private bookstackService: BookstackService
  ) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(book => {
      if (book) {
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

  onCreateBook(selectedBook: Book, review: string, phrase: string) {

    if (!selectedBook) {
      alert('상단의 [책 찾기 검색창]을 통해 읽은 책을 선택해 주세요.');
      return;
    }

    if (!review) {
      alert('한줄평을 작성해 주세요.');
      return;
    }

    if (!phrase) {
      alert('상단의 [책 찾기 검색창]을 통해 읽은 책을 선택해 주세요.');
      return;
    }

    const newBook: Book = {
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
    };

    this.isSpinner = true;

    this.bookstackService.createBook(newBook).subscribe(
      book => {
        console.log(book);
        this.router.navigate(['/']);
        this.isSpinner = false;
      },
      error => {
        console.error(error);
      }
    );
  }
}
