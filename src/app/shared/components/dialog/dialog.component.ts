import { Component, OnInit } from '@angular/core';

import { BookstackService } from '../../../services/bookstack.service';

import { Book } from '../../../models/book';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  books: Book[];
  book: Book;

  isDefault: boolean = true;
  isSearching: boolean = false;

  constructor(
    private bookstackService: BookstackService
  ) { }

  ngOnInit() {

  }

  searchBooks(searchText:string, $event) {
    this.bookstackService.getAllBooks().subscribe(
      books => {this.books = books;this.isDefault=false}
    );

    // this.bookstackService.searchBooks(searchText).subscribe(
    //   books => {}
    // );
  }

  selectBook(book: Book, $event) {
    this.books.forEach(
      book => book.isSelected = false
    );
    
    book.isSelected = !book.isSelected;
    this.book = book;
  }
}
