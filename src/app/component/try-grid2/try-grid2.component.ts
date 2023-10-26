import { Component, OnInit } from '@angular/core';
import { TableColumns } from 'src/app/interface/table_columns';
import { DummyData } from './../../../../projects/sm-common-lib/src/lib/interface/dummy_data';

@Component({
  selector: 'app-try-grid2',
  templateUrl: './try-grid2.component.html',
  styleUrls: ['./try-grid2.component.scss'],
})
/*
  @author: chandraa01 26/10/23
*/
export class TryGrid2Component implements OnInit {
  listData = [] as DummyData[];
  tableColumns: TableColumns[];

  constructor() {}

  ngOnInit(): void {
    this.generateTableColumns();
    this.generateDummyData();
  }

  checkDisabledEditBtn(data: DummyData): boolean {
    if (data.name === 'Chandra Sukmagalih Arifin') return true;
    return false;
  }

  onActionClick(action: string, data: any, index: number) {
    console.log(action, data);
  }

  onRowClick(data: any, index: number) {
    alert(JSON.stringify(data));
  }

  generateTableColumns() {
    this.tableColumns = [
      {
        title: 'ID',
        property: 'id',
        sortable: true,
      },
      {
        title: 'Name',
        property: 'name',
        sortable: true,
      },
      {
        title: 'Position',
        property: 'position',
        sortable: false,
      },
      // {
      //   title: 'Birth Date',
      //   property: 'birthDate',
      //   sortable: false,
      // },
      {
        title: 'Preview',
        type: 'image',
        property: 'imageUrl',
        image: {
          width: 'auto',
          height: '80px',
        },
      },
      {
        title: 'Edit',
        property: 'action',
        type: 'edit',
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

  generateDummyData() {
    const dummy: DummyData[] = [
      {
        id: 12345,
        name: 'Chandra Sukmagalih Arifin',
        position: 'Application Development Specialist',
        birthDate: new Date(),
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Gudang_Garam_logo.svg/800px-Gudang_Garam_logo.svg.png',
      },
      {
        id: 23451,
        name: 'Joseph Tarigan',
        position: 'Application Development Coordinator',
        birthDate: new Date(),
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Gudang_Garam_logo.svg/800px-Gudang_Garam_logo.svg.png',
      },
      {
        id: 34512,
        name: 'Ilham Kusuma Yuda',
        position: 'Application Development Specialist',
        birthDate: new Date(),
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Gudang_Garam_logo.svg/800px-Gudang_Garam_logo.svg.png',
      },
    ];

    for (let i = 0; i < 10; i++)
      this.listData.push({
        ...dummy[i % 3],
        id: dummy[i % 3].id + i,
      });
  }
}