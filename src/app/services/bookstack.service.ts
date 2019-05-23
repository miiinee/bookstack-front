import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Book } from '../models/book';
import { BOOKS } from '../shared/mock/mocks';

@Injectable({
  providedIn: 'root'
})
export class BookstackService {

  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(BOOKS);
  }

}
