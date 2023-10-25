import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sm-custom-grid2',
  templateUrl: './custom-grid2.component.html',
  styleUrls: ['./custom-grid2.component.css'],
})
export class CustomGrid2Component<T> implements OnInit {
  @Input() public tableConfig: any;
  @Input() public tableContent: T[];
  @Input() public onRowClick: any;
  @Input() public onActionClick: any;

  public pageList: number[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.tableContent);
  }

  public onRowDataClick(data: T) {
    this.onRowClick(data);
  }

  public onRowActionClick(action: string, data: T): void {
    const userAction: any = {
      action: action,
      data: data,
    };
    this.onActionClick(action, data);
  }
}
