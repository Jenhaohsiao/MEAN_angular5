import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Rug } from '../shared/models/rug.model';
import { RugService } from '../shared/services/rug.service';

@Component({
  selector: 'app-rug-list',
  templateUrl: './rug-list.component.html',
  styleUrls: ['./rug-list.component.scss'],
  inputs: ['rugs'], // input array and show on the list.
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
