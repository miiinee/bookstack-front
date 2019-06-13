import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Book } from '../../models/book';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

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

  isWriting = false;
  isFavorite = false;
  isBookmark = false;

  constructor(
    public dialog: MatDialog
  ) { }

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

  onDeleteBook(uid: string) {
    console.log(uid);
  }

  confirmDeleteBook(book: Book, $event) {
    const dialogRef = this.dialog.open(DialogComponent, {minWidth: '25vw'});

    dialogRef.afterClosed().subscribe(bool => {
      console.log(`Dialog result: ${bool}`);
      if (bool) {
        this.onDeleteBook(book.uid);
      }
    });
  }
}
