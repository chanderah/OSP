import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { TableColumns } from '../../interface/table_columns';
import { PagingInfo } from './../../interface/paging_info';

@Component({
  selector: 'sm-custom-grid2',
  templateUrl: './custom-grid2.component.html',
  styleUrls: ['./custom-grid2.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * @author chandraa01
 * 26-10-2023
 */
export class CustomGrid2Component<T> implements OnInit, OnChanges {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Input() public loading: boolean;
  @Input() public width: string = '';
  @Input() public multiple: boolean = false;
  @Input() public tableColumns: TableColumns[] = [];
  @Input() public tableContent: T[] = [];
  @Input() public onFilter: any; // function
  @Input() public onRowClick: any; // function
  @Input() public onChecked: any; // function
  @Input() public onActionClick: any; // function
  @Input() public pagingInfo: PagingInfo;
  @Output() notify: EventEmitter<any> = new EventEmitter();

  private init: boolean = true;
  public selectedRowIndex: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.tableContent.length > 0) {
      if (changes['tableColumns']) {
        this.tableColumns = this.tableColumns;
      }
    }
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

  onPaginateChange(e: PageEvent) {
    this.pagingInfo = {
      ...this.pagingInfo,
      limit: e.pageSize,
      activePage: e.pageIndex,
    };
    this.onFilter(this.pagingInfo);
  }

  linkTablePagination() {
    // this.paginator.pageIndex = pageIndex;
    // this.dataSource.paginator.page.emit({
    //   length: this.paginator.getNumberOfPages(),
    //   pageIndex: pageIndex,
    //   pageSize: this.paginator.pageSize
    // })
  }
}
