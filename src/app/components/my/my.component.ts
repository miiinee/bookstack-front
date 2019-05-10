import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {
  
  innerWidth: number;

  isMine: boolean = true;
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
