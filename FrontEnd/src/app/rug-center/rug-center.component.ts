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
  private hidenNewRug = true;

  // dependency injection, from RugService
  constructor(private _rugService: RugService) { }

  ngOnInit() {
    // subscribe getRugsFromHttp() from "rug.service.ts"
    this._rugService.getRugsFromHttp().subscribe(resRugData => this.rugsArray = resRugData);
  }

  // catch the selected item and send to detail
  onSelectRug(rug: any) {
    this.selectedRug = rug;
    this.hidenNewRug = true;
    console.log(this.selectedRug);
  }

  // Get form.value from HTML, and push by rugService.addRug
  onSubmitAddRug(rug: Rug) {
    this._rugService.addRug(rug).subscribe(resNewRug => {
      // After submit, and the view also gets updated.
      this.rugsArray.push(resNewRug);
      // the new Rug shows on the detail view
      this.selectedRug = resNewRug;
      this.hidenNewRug = true;

    });
  }

  onUpdateRugEvent(rug: any) {
    this._rugService.updateRug(rug).subscribe(resUpdatedRug =>
      rug = resUpdatedRug
    );
    this.selectedRug = null;
  }

  newRug() {
    this.hidenNewRug = false;
  }

}
