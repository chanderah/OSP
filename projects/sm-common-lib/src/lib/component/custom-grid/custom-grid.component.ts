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
  @Input() callback1: any;
  @Input() callback2: any;
  @Input() callback3: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.datas);
  }

  function1(data: DummyData, action: string) {
    // alert(`${action}: ID ${data.id}`);
    this.callback1(`${action}: ID ${data.id}`);
  }

  function2(data: DummyData, action: string) {
    this.callback2(`${action}: ID ${data.id}`);
  }
}
