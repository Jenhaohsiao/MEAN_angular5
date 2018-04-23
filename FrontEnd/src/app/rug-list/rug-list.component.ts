import { Component, OnInit, EventEmitter } from '@angular/core';
import { Rug } from './../rug';

@Component({
  selector: 'rug-list',
  templateUrl: './rug-list.component.html',
  styleUrls: ['./rug-list.component.css'],
  inputs: ['rugsArray'], // input array and show on the list.
  outputs: ['SelectRug'] // output the selected item send to rug-center.
})
export class RugListComponent implements OnInit {

  public SelectRug = new EventEmitter(); // For click event and output

  constructor() { }

  ngOnInit() {
  }

  // the function for click event
  onSelect(vid: Rug) {
    this.SelectRug.emit(vid);
  }

}
