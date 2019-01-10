import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employees-filter-textbox',
  templateUrl: './employees-filter-textbox.component.html',
  styleUrls: ['./employees-filter-textbox.component.css']
})
export class EmployeesFilterTextboxComponent implements OnInit {

  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value;
    this.changed.emit(this.filter);
  }
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }
}
