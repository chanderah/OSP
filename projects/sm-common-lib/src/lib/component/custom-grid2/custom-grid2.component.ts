import { Component, Input, OnInit } from '@angular/core';
import { TableColumns } from '../../interface/table_columns';

@Component({
  selector: 'sm-custom-grid2',
  templateUrl: './custom-grid2.component.html',
  styleUrls: ['./custom-grid2.component.css'],
})
export class CustomGrid2Component<T> implements OnInit {
  @Input() public tableColumns: TableColumns[];
  @Input() public tableContent: T[];
  @Input() public onRowClick: any; // function
  @Input() public onActionClick: any; // function

  // private enableRowClick: boolean = true;

  public pagingInfo: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.onRowClick === null);
  }

  public onRowDataClick(data: T, index: number) {
    this.onRowClick(data, index);
  }

  public onRowActionClick(action: any, data: T, index: number): void {
    this.onActionClick(action, data, index);
  }

  isBoolean(obj: any): boolean {
    return typeof obj === 'boolean';
  }
}
