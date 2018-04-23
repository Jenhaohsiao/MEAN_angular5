import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'rug-detail',
  templateUrl: './rug-detail.component.html',
  styleUrls: ['./rug-detail.component.css'],
  inputs: ['rug'] // the data from rug-center
})
export class RugDetailComponent implements OnInit {

  private editName = false;

  constructor() { }

  ngOnInit() {
  }

  // Listen to ng on changes life cycle hook,
  // When user click another item and change it back to "false"
  ngOnChanges() {
    this.editName = false;
  }

  // When user click, "editeName" becomes "true"
  onNameClick() {
    this.editName = true;
  }

}
