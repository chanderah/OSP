import { Component, Input, OnInit } from '@angular/core';
import { DummyData } from '../../interface/dummy_data';

@Component({
  selector: 'sm-custom-grid2',
  templateUrl: './custom-grid2.component.html',
  styleUrls: ['./custom-grid2.component.css'],
})
export class CustomGrid2Component implements OnInit {
  @Input() datas: DummyData[] = [];
  @Input() enabledColumns: string[] = [];

  ngOnInit(): void {
    console.log(this.datas);
  }
}
