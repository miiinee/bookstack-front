import { Component, OnInit } from '@angular/core';

import { BookstackService } from '../../services/bookstack.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: Book[];
  isMine: false;

  constructor(
    private bookstackService: BookstackService
  ) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.bookstackService.getAllBooks().subscribe(
      books => this.books = books
    );
  }

}
