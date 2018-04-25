import { Component, OnInit } from '@angular/core';

import { Rug } from '../shared/models/rug.model';
import { RugService } from '../shared/services/rug.service';

@Component({
  selector: 'app-rug-center',
  templateUrl: './rug-center.component.html',
  styleUrls: ['./rug-center.component.scss']
})
export class RugCenterComponent implements OnInit {
  rugs: Rug[] = [];
  rug: Rug;
  editMode = false;

  constructor(private rugService: RugService) { }

  ngOnInit() {
    this.rugService.getRugs()
      .subscribe(rugs => this.rugs = rugs);
  }

  onSelectRug(rug: Rug) {
    this.setRug(Object.assign({}, rug));
    this.setEditMode(false);
  }

  onSaveRug(rug: Rug) {
    if (rug._id) {
      this.rugService.updateRug(rug)
        .subscribe(_ => {
          const result = this.getRugById(rug._id);
          result.name = rug.name;
          result.price = rug.price;
          result.serialNumber = rug.serialNumber;

        });
    } else {
      this.rugService.addRug(rug)
        .subscribe(result => {
          this.rugs.push(result);

          this.setRug(result);
        });
    }
  }

  onDeleteRug(rug: Rug) {
    this.rugService.deleteRug(rug._id)
      .subscribe(_ => {
        this.rugs = this.rugs.filter(rugEntity => rugEntity._id !== rug._id);

        this.setRug(null);
      });
  }
  onAddRug() {
    this.rug = new Rug();
    this.onEdit();
  }

  onEdit() {
    this.setEditMode(true);
  }

  private setEditMode(editMode: boolean) {
    this.editMode = editMode;
  }

  private setRug(rug: Rug) {
    this.rug = rug;
  }
  private getRugById(id: string): Rug {
    return this.rugs.find(rug => rug._id === id);
  }

}
