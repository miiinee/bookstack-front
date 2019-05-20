import { Injectable } from '@angular/core';

import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookstackService {

  constructor() { }

  getBooks(): Book[] {
    return null;
  }

}
