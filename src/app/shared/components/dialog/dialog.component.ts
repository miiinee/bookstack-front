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

  isDefault: boolean = true;
  isSearching: boolean = false;

  constructor(
    private bookstackService: BookstackService
  ) { }

  ngOnInit() {

  }

  searchBooks() {
    this.bookstackService.getAllBooks().subscribe(
      books => {this.books = books;this.isDefault=false}
    );
  }
}
