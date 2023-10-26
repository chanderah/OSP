import { Component, Input, OnInit } from '@angular/core';
import { TableColumns } from '../../interface/table_columns';

@Component({
  selector: 'sm-custom-grid2',
  templateUrl: './custom-grid2.component.html',
  styleUrls: ['./custom-grid2.component.css'],
})
export class CustomGrid2Component<T> implements OnInit {
  @Input() public width: string;
  @Input() public tableColumns: TableColumns[];
  @Input() public tableContent: T[];
  @Input() public onRowClick: any; // function
  @Input() public onActionClick: any; // function

  public pagingInfo: any;

  constructor() {}

  ngOnInit(): void {}

  public onRowActionClick(action: any, data: T, index: number): void {
    if (!this.onActionClick) this.onActionClick(action, data, index);
  }

  public onRowDataClick(data: T, index: number) {
    if (!this.onRowClick) this.onRowClick(data, index);
  }

  runEval(fn: any, data: T) {
    if (!fn) return false;
    if (typeof fn === 'boolean') return fn;
    return fn(data);
  }

  isBoolean(obj: any): boolean {
    return typeof obj === 'boolean';
  }
}
