import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Rug } from '../shared/models/rug.model';
import { RugService } from './../shared/services/rug.service';
@Component({
  selector: 'app-rug-detail',
  templateUrl: './rug-detail.component.html',
  styleUrls: ['./rug-detail.component.scss'],
})
export class RugDetailComponent implements OnInit {

  @Input() rug: Rug;
  @Input() editMode = false;

  @Output() save = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() fileChange = new EventEmitter();

  constructor(public rugService: RugService) { }

  ngOnInit() {
  }

  onClickEdit() {
    this.editMode = !this.editMode;
  }
}
