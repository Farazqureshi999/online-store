import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setproduct',
  templateUrl: './setproduct.component.html',
  styleUrls: ['./setproduct.component.css']
})
export class SetproductComponent implements OnInit {
  toggleField: string;
  savedChanges = false;
  constructor() { }

  ngOnInit() {
    this.toggleField = 'searchMode';
  }

  toggle(filter) {
    if (!filter) {
      filter = 'searchMode';
    } else {
        filter = filter;
    }
    this.toggleField = filter;
  }

  getFilterData() {

  }

  getData() {

  }

  setData() {

  }
}
