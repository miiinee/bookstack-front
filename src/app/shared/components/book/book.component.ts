import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Book } from '../../../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Input() isWriting: boolean;
  @Input() isSearching: boolean;
  
  innerWidth: number;
  
  isMobile: boolean = false;

  constructor() { }

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 735) {
      this.isMobile = false;
    }else{
      this.isMobile = true;
    }
    console.log(this.innerWidth + '//' + this.isMobile);
  }
}
