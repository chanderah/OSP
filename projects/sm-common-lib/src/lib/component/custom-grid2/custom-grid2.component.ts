import { Component, Input, OnInit } from '@angular/core';
import { TableColumns } from '../../interface/table_columns';

@Component({
  selector: 'sm-custom-grid2',
  templateUrl: './custom-grid2.component.html',
  styleUrls: ['./custom-grid2.component.css'],
})
export class CustomGrid2Component<T> implements OnInit {
  @Input() public width: string = '';
  @Input() public multiple: boolean = false;
  @Input() public tableColumns: TableColumns[] = [];
  @Input() public tableContent: T[] = [];
  @Input() public onRowClick: any; // function
  @Input() public onChecked: any; // function
  @Input() public onActionClick: any; // function
  // @Input() public pagingInfo: PagingInfo;

  public selectedRowIndex: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.tableContent.length = 0;
    console.log(this.multiple);
  }

  public onRowActionClick(action: any, data: T, index: number): void {
    if (!this.onActionClick) return;
    return this.onActionClick(action, data, index);
  }

  public onRowDataClick(data: T, index: number) {
    if (!this.onRowClick) {
      if (this.multiple) {
        const checked: boolean = this.isRowChecked(index);
        return this.onRowChecked(!checked, index);
      } else return;
    } else return this.onRowClick(data, index);
  }

  // prettier-ignore
  public onRowChecked(e: any, index: number) {
    const checked: boolean = typeof e === 'boolean' ? e : e.target.checked;
    try {
      if (checked) this.selectedRowIndex.push(index);
      else this.selectedRowIndex.splice(this.selectedRowIndex.indexOf(index), 1);
    } catch (e) { }
    return this.onChecked(this.selectedRowIndex);
  }

  runEval(fn: any, data: T) {
    if (!fn) return false;
    if (typeof fn === 'boolean') return fn;
    return fn(data);
  }

  isRowChecked(index: number) {
    return this.selectedRowIndex?.indexOf(index) > -1;
  }
}
