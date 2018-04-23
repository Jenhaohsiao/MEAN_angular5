import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'rug-detail',
  templateUrl: './rug-detail.component.html',
  styleUrls: ['./rug-detail.component.css'],
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['rug'], // the data from rug-center
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ['updateRugEvent', 'deleteRugEvent']
})
export class RugDetailComponent implements OnInit {

  rug: any;
  private editName = false;
  private updateRugEvent = new EventEmitter();
  private deleteRugEvent = new EventEmitter();

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
  // Pass rug data when user click from html
  updateRug() {
    this.updateRugEvent.emit(this.rug);
  }

  deleteRug() {
    this.deleteRugEvent.emit(this.rug);
  }

}
