import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { BookstackService } from '../../services/bookstack.service';

import { Book } from '../../models/book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchField') searchField: ElementRef;

  books: Book[];
  book: Book;

  startNo = 1;

  isDefault = true;
  isSearching = false;

  constructor(
    private bookstackService: BookstackService
  ) { }

  ngOnInit() {

  }

  searchBooks(searchText: string, $event) {
    // this.bookstackService.getAllBooks().subscribe(
    //   books => {this.books = books; this.isDefault = false;}
    // );
    if(!searchText) {
      alert('검색어를 입력해주세요.');
      this.searchField.nativeElement.focus();
      return;
    }

    if(this.startNo > 1) {
      this.startNo = this.startNo + 10;
    }

    this.isDefault = false;
    this.isSearching = true;

    this.bookstackService.searchBooks(searchText, this.startNo).subscribe(
      books => {
        this.books = books;

        this.isSearching = false;
      },
      error => {
        //TODO: toast
      }
    );
  }

  selectBook(book: Book, $event) {
    this.books.forEach(
      each => each.isSelected = false
    );
    
    book.isSelected = !book.isSelected;
    this.book = book;
  }
}
