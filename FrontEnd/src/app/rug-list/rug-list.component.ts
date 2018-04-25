import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Rug } from '../shared/models/rug.model';
import { RugService } from '../shared/services/rug.service';

@Component({
  selector: 'app-rug-list',
  templateUrl: './rug-list.component.html',
  styleUrls: ['./rug-list.component.scss'],
})
export class RugListComponent implements OnInit {
  @Input() rugs: Rug[];

  @Output() select = new EventEmitter();

  constructor(public rugService: RugService) { }

  ngOnInit() {
  }
}
