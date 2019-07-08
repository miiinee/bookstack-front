import { Component, OnInit, HostListener } from '@angular/core';

import { BookstackService } from '../../services/bookstack.service';
import { UserService } from '../../services/user.service';

import { Book } from '../../models/book';
import { User } from '../../models/user';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {

  user: User;

  books: Book[];
  innerWidth: number;

  isMine = true;
  isMobile = false;

  constructor(
    private bookstackService: BookstackService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.onResize();
    this.getBooks();
    this.getUser();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 735) {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
    console.log(this.innerWidth + '//' + this.isMobile);
  }

  getBooks(): void {
    this.bookstackService.getMyBooks('u0001').subscribe(
      books => this.books = books
    );
  }

  getUser(): void {
    this.userService.getUser('u0001').subscribe(
      user => this.user = user
    );
  }
}
