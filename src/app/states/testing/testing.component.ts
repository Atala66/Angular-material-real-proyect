import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.less']
})
export class TestingComponent implements OnInit {
  active: string;
  isRed: boolean;
  isActive: boolean;
  isFocused: boolean;

  constructor() { }

  ngOnInit() {
    this.active = 'font-size';
    this.isRed = false;
    this.isActive = true;
    this.isFocused = false;
  }

}
