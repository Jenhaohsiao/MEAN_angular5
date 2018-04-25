import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rug-detail',
  templateUrl: './rug-detail.component.html',
  styleUrls: ['./rug-detail.component.scss'],
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['rug'], // the data from rug-center
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ['updateRugEvent', 'deleteRugEvent']
})
export class RugDetailComponent implements OnInit {

  rug: any;
  private editItem = false;
  private updateRugEvent = new EventEmitter();
  private deleteRugEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Listen to ng on changes life cycle hook,
  // When user click another item and change it back to "false"
  ngOnChanges() {
    this.editItem = false;
  }

  // When user click, "editeName" becomes "true"
  onNameClick() {
    this.editItem = true;
  }
  // Pass rug data when user click from html
  updateRug() {
    this.updateRugEvent.emit(this.rug);
    this.editItem = false;
  }

  deleteRug() {
    this.deleteRugEvent.emit(this.rug);
  }

}
