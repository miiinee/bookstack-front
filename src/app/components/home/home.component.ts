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
  isMine: boolean = false;

  constructor(
    private bookstackService: BookstackService
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.bookstackService.getBooks().subscribe(
      books => this.books = books
    );
  }

}
