import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as _ from 'lodash';

import { Book } from '../models/book';
import { BOOKS, USERS, BOOKMARKS } from '../shared/mock/mocks';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class BookstackService {

  constructor() { }

  getAllBooks(userUid?: string): Observable<Book[]> {
    userUid = 'u0001';

    const myBookmarks = _.filter(BOOKMARKS, {'userUid': userUid});

    myBookmarks.map(bookmark => {
        const book = _.find(BOOKS, {'uid' : bookmark.bookUid});
        book.isBookmark = true;
      }
    );
    
    BOOKS.map(book => {
      const user = _.find(USERS, { 'uid' : book.addUserUid });
      book.username = user.username;
      
    });
    return of(BOOKS);
  }

  getMyBooks(userUid: string): Observable<Book[]> {
    const myBooks = [];

    BOOKS.map(book => {
      if(book.addUserUid === userUid){
        myBooks.push(book);
      };
    });
    return of(myBooks);
  }

  getMyBookmarks(userUid: string): Observable<Book[]> {
    const myBookmarks = _.filter(BOOKMARKS, {'userUid': userUid});
    const books = [];

    myBookmarks.map(bookmark => {
        const user = _.find(USERS, {'uid' : bookmark.userUid});
        const book = _.find(BOOKS, {'uid' : bookmark.bookUid});
        book.username = user.username;
        book.isBookmark = true;
        books.push(book);
      }
    );
    
    return of(books);
  }
}
