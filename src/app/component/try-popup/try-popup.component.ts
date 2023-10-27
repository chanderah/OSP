import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupSelectionComponent } from 'projects/sm-common-lib/src/lib';
import { Lov } from 'src/app/interface/lov';

@Component({
  selector: 'app-try-popup',
  templateUrl: './try-popup.component.html',
  styleUrls: ['./try-popup.component.scss'],
})
export class TryPopupComponent implements OnInit {
  listLovDummy: Lov[] = [];
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.listLovDummy.push({
        id: `${i + 1}`,
        value: `Chandra Sukmagalih Arifin ${i + 1}`,
        anotherValue: `Data ${i}`,
      });
    }
  }

  openPopup() {
    this.dialog
      .open(PopupSelectionComponent, {
        data: {
          data: this.listLovDummy,
          // onError: this.onError,
          // onSubmit: this.onSubmit,
          // onFilter: this.onFilter,
        },
      })
      .afterClosed()
      .subscribe((res) => {
        console.log(res);
      });
  }

  onFilter(data: any) {
    console.log('filter', data);
  }

  onError(data: any) {
    console.log('err', data);
  }

  onSubmit(data: any) {
    console.log('submit', data);
  }
}
