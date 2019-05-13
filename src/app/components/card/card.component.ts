import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() isMine: boolean;
  innerWidth: number;
  size: string;

  phrase: string;

  isWriting: boolean = false;
  isFavorite: boolean = false;
  isBookmark: boolean = false;

  constructor() { }

  ngOnInit() {
    this.phrase = 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
                + 'A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.';
  }

  toggleFavorite($event) {
    this.isFavorite = !this.isFavorite;
  }

  toggleBookmark($event) {
    this.isBookmark = !this.isBookmark;
  }

}
