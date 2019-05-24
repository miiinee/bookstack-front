import { Component, OnInit } from '@angular/core';

import { BookstackService } from 'src/app/services/bookstack.service';

import { Book } from '../../models/book';
import { Bookmark } from 'src/app/models/bookmark';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  books: Book[];

  constructor(
    private bookstackService: BookstackService
  ) { }

  ngOnInit() {
    this.getBookmarks();
  }

  getBookmarks(): void {
    this.bookstackService.getMyBookmarks('u0001').subscribe(
      books => this.books = books
    );
    console.log(this.books);
  }
}
