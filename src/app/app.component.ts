import { Component, OnInit } from '@angular/core';
// templateUrl: './app.component.html',
@Component({
  selector: 'app-root',
  template: `<app-employees></app-employees>`
  })
export class AppComponent implements OnInit {
  title: string;

  constructor() {}

  ngOnInit() {
    this.title = 'Hello World';
  }

}
