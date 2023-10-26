import { Component, OnInit } from '@angular/core';
import { PagingInfo } from 'src/app/interface/paging_info';
import { TableColumns } from 'src/app/interface/table_columns';
import { DummyData } from './../../../../projects/sm-common-lib/src/lib/interface/dummy_data';

@Component({
  selector: 'app-try-grid2',
  templateUrl: './try-grid2.component.html',
  styleUrls: ['./try-grid2.component.scss'],
})
export class TryGrid2Component implements OnInit {
  isLoading: boolean = true;
  pagingInfo = {} as PagingInfo;
  listData = [] as DummyData[];
  tableColumns = [] as TableColumns[];

  constructor() {}

  ngOnInit(): void {
    this.pagingInfo = {
      activePage: 0,
      offset: 0,
      limit: 10,
      limitOptions: [10, 20, 50, 100],
      sort: { field: '', order: 1 },
    };
    this.generateTableColumns();
    this.getDataFromApi();
  }

  async getDataFromApi(pagingInfo?: PagingInfo) {
    this.isLoading = true;
    await fetch(
      `https://hub.dummyapis.com/employee?noofRecords=${
        pagingInfo?.limit
      }&idStarts=${
        (pagingInfo?.activePage || 0) * (pagingInfo?.limit || 10) + 1001
      }`
    )
      .then((res) => res.json())
      .then((response: any[]) => {
        this.isLoading = false;
        this.pagingInfo.rowCount = 97;
        response.forEach((data, i) => {
          data.name = `${data.firstName} ${data.lastName}`;
          data.birthDate = new Date();
          data.position =
            i % 2 === 0
              ? 'Application Development Specialist'
              : 'Application Development Coordinator';
        });
        this.listData = response;
      });
  }

  checkDisabledEditBtn(data: DummyData): boolean {
    if (data.name === 'Chandra Sukmagalih Arifin') return true;
    return false;
  }

  onChecked(indexes: number[]) {
    console.log('selected index is: ', indexes);
  }

  onActionClick(action: string, data: any, index: number) {
    console.log(action, data);
  }

  onRowClick(data: any, index: number) {
    alert(JSON.stringify(data));
  }

  onImageClick(data: any) {
    console.log('image: ', data);
  }

  generateTableColumns() {
    this.tableColumns = [
      {
        title: 'ID',
        property: 'id',
      },
      {
        title: 'Name',
        property: 'name',
      },
      {
        title: 'Position',
        property: 'position',
      },
      {
        type: 'image',
        title: 'Preview',
        property: 'imageUrl',
        image: {
          onClick: this.onImageClick,
          width: 'auto',
          height: '80px',
        },
      },
      {
        type: 'edit',
        title: 'Edit',
        property: 'action',
        disabled: this.checkDisabledEditBtn,
        // disabled: false,
        icon: 'edit',
        sortable: false,
      },
      {
        title: 'Delete',
        property: 'action',
        type: 'delete',
        icon: 'delete_forever',
        sortable: false,
      },
    ];
  }

  //   public generateDummyData() {
  //     const dummy: DummyData[] = [
  //       {
  //         id: 12345,
  //         name: 'Chandra Sukmagalih Arifin',
  //         position: 'Application Development Specialist',
  //         birthDate: new Date(),
  //         imageUrl:
  //           'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Gudang_Garam_logo.svg/800px-Gudang_Garam_logo.svg.png',
  //       },
  //       {
  //         id: 23451,
  //         name: 'Joseph Tarigan',
  //         position: 'Application Development Coordinator',
  //         birthDate: new Date(),
  //         imageUrl:
  //           'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Gudang_Garam_logo.svg/800px-Gudang_Garam_logo.svg.png',
  //       },
  //       {
  //         id: 34512,
  //         name: 'Ilham Kusuma Yuda',
  //         position: 'Application Development Specialist',
  //         birthDate: new Date(),
  //         imageUrl:
  //           'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Gudang_Garam_logo.svg/800px-Gudang_Garam_logo.svg.png',
  //       },
  //     ];

  //     this.listData.length = 0;
  //     for (let i = 0; i < 10; i++)
  //       this.listData.push({
  //         ...dummy[i % 3],
  //         id: dummy[i % 3].id + i,
  //       });
  //   }
}
