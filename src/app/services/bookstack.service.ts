import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, empty } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { getLocaleDateTimeFormat, FormatWidth } from '@angular/common';

import * as _ from 'lodash';
import * as uuid from 'uuid';

import { Book } from '../models/book';
import { BOOKS, USERS, BOOKMARKS } from '../shared/mock/mocks';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class BookstackService {

  constructor(
    private http: HttpClient
  ) { }

  setUsername(userUid: string): string {
    const user = _.find(USERS, { uid : userUid });
    return user.username;
  }

  getAllBooks(userUid?: string): Observable<Book[]> {
    userUid = 'u0001';

    const myBookmarks = _.filter(BOOKMARKS, {userUid});

    myBookmarks.map(bookmark => {
        const book = _.find(BOOKS, {uid : bookmark.bookUid});
        book.isBookmark = true;
      }
    );

    BOOKS.map(book => {
      book.username = this.setUsername(book.addUserUid);
    });

    const books = _.orderBy(BOOKS, ['addDt', 'modDt'], ['desc', 'desc']);

    return of(books);
  }

  getMyBooks(userUid: string): Observable<Book[]> {
    const myBooks = [];

    BOOKS.map(book => {
      if (book.addUserUid === userUid) {
        myBooks.push(book);
      }
    });
    return of(myBooks);
  }

  getMyBookmarks(userUid: string): Observable<Book[]> {
    const myBookmarks = _.filter(BOOKMARKS, {userUid});
    const books = [];

    myBookmarks.map(bookmark => {
        const user = _.find(USERS, {uid : bookmark.userUid});
        const book = _.find(BOOKS, {uid : bookmark.bookUid});
        book.username = user.username;
        book.isBookmark = true;
        books.push(book);
      }
    );

    return of(books);
  }

  searchBooks(searchText: string, startNo: number): Observable<Book[]> {
    // naver api -> server side에서만 호출 가능(express-mongodb proj. -> router/index.js 테스트)
    // const url = `https://openapi.naver.com/v1/search/book.json?query=${searchText}&display=10&start=${startNo}`;
    // return this.http.get<Book[]>(url).pipe(
    //   tap(
    //     data => {
    //       console.log(data);
    //     }
    //   ),
    //   catchError(this.handleError('searchBooks', []))
    // );
    return of(BOOKS);
  }

  createBook(book: Book): Observable<Book> {
    const url = ``;

    book.uid = uuid.v4();
    book.addDt = new Date().toDateString();
    BOOKS.push(book);

    return of(book);
    // return this.http.post<Book>(url, book).pipe(
    //   tap(
    //     data => {
    //       console.log(data);
    //     }
    //   ),
    //   catchError(this.handleError<Book>('createBook'))
    // );
  }

  /**
   * HTTP 요청이 실패한 경우를 처리합니다.
   * 애플리케이션 로직 흐름은 그대로 유지됩니다.
   * @param operation - 실패한 동작의 이름
   * @param result - 기본값으로 반환할 객체
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: 리모트 서버로 에러 메시지 보내기
      console.error(error); // 지금은 콘솔에 로그를 출력합니다.
      console.error(operation + '::' + error.message); // 지금은 콘솔에 로그를 출력합니다.

      // TODO: 사용자가 이해할 수 있는 형태로 변환하기
      // this.log(`${operation} failed: ${error.message}`);

      // 애플리케이션 로직이 끊기지 않도록 기본값으로 받은 객체를 반환합니다.
      return of(result as T);
    };
  }
}
