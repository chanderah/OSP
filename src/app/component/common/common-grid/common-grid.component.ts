import { Component, Input, OnInit } from '@angular/core';
import { DummyData } from './../../../interface/dummy_data';

@Component({
  selector: 'common-grid',
  templateUrl: './common-grid.component.html',
  styleUrls: ['./common-grid.component.scss'],
})
export class CommonGridComponent implements OnInit {
  @Input() datas: DummyData[] = [];
  @Input() enabledColumns: string[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.datas);
  }

  onButtonClicked(data: DummyData, action: string) {
    alert(`${action}: ID ${data.id}`);
  }
}
