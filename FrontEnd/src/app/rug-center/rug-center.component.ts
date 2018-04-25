import { Component, OnInit } from '@angular/core';
import { Rug } from './../rug';
import { RugService } from '../rug.service';

@Component({
  selector: 'app-rug-center',
  templateUrl: './rug-center.component.html',
  styleUrls: ['./rug-center.component.scss'],
  providers: [RugService]
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
    // this.selectedRug = null;
  }

  onDeleteRugEvent(rug: any) {
    const rugsArrayForDel = this.rugsArray;
    // update the UI, show new list without the item deleted.
    this._rugService.deleteRug(rug).subscribe(resDeletedRug => {
      for (let i = 0; i < rugsArrayForDel.length; i++) {
        if (rugsArrayForDel[i]._id === rug._id) {
          rugsArrayForDel.splice(i, 1);
        }
      }
    });
    this.selectedRug = null;
  }

  newRug() {
    this.hidenNewRug = false;
  }

}
