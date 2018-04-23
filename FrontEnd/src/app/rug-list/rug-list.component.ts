import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rug-list',
  templateUrl: './rug-list.component.html',
  styleUrls: ['./rug-list.component.css'],
  inputs: ['rugsArray']
})
export class RugListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
