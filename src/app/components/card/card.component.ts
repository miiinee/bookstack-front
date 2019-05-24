import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() book: Book;
  @Input() isMine: boolean;

  innerWidth: number;
  size: string;

  isWriting: boolean = false;
  isFavorite: boolean = false;
  isBookmark: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isFavorite = this.book.isFavorite;
    this.isBookmark = this.book.isBookmark;
  }

  toggleFavorite($event) {
    this.isFavorite = !this.isFavorite;
  }

  toggleBookmark($event) {
    this.isBookmark = !this.isBookmark;
  }

}
