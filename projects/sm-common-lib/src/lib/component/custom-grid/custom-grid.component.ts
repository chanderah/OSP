import { Component, Input } from '@angular/core';
import { DummyData } from '../../interface/dummy_data';

@Component({
  selector: 'sm-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css'],
})
export class CustomGridComponent {
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
