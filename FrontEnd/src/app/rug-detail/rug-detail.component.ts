import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rug-detail',
  templateUrl: './rug-detail.component.html',
  styleUrls: ['./rug-detail.component.css'],
  inputs: ['rug'] // the data from rug-center
})
export class RugDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
