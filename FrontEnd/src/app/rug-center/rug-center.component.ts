import { Component, OnInit } from '@angular/core';
import { Rug } from './../rug';

@Component({
  selector: 'app-rug-center',
  templateUrl: './rug-center.component.html',
  styleUrls: ['./rug-center.component.css']
})
export class RugCenterComponent implements OnInit {

  rugsArray: Rug[] = [
    {'_id': '01', 'name': 'Type A', 'price': '$2,000', 'serialNumber': 'NO.02231'},
    {'_id': '02', 'name': 'Type B', 'price': '$1,000', 'serialNumber': 'NO.07234'},
    {'_id': '03', 'name': 'Type C', 'price': '$2,500', 'serialNumber': 'NO.08933'},
    {'_id': '04', 'name': 'Type D', 'price': '$2,660', 'serialNumber': 'NO.02290'},
    {'_id': '05', 'name': 'Type F', 'price': '$2,663', 'serialNumber': 'NO.02291'}
  ];

  // the selected rug passed by list selected.
  selectedRug: Rug;

  constructor() { }

  ngOnInit() {
  }

  // catch the selected item and send to detail
  onSelectRug(rug: any) {
    this.selectedRug = rug;
    console.log(this.selectedRug);
  }

}
