import { Component, OnInit } from '@angular/core';
import { Rug } from './../rug';
import { RugService } from '../rug.service';

@Component({
  selector: 'app-rug-center',
  templateUrl: './rug-center.component.html',
  styleUrls: ['./rug-center.component.css'],
  providers: [ RugService]
})
export class RugCenterComponent implements OnInit {

  rugsArray: Array<Rug>;

  // the selected rug passed by list selected.
  selectedRug: Rug;

  // dependency injection, from RugService
  constructor(private _rugService: RugService) { }

  ngOnInit() {
    // subscribe getRugsFromHttp() from "rug.service.ts"
    this._rugService.getRugsFromHttp().subscribe(resRugData => this.rugsArray = resRugData);
  }

  // catch the selected item and send to detail
  onSelectRug(rug: any) {
    this.selectedRug = rug;
    console.log(this.selectedRug);
  }

}
