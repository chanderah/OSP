import { Component, OnInit } from '@angular/core';
import { DummyData } from './../../../../projects/sm-common-lib/src/lib/interface/dummy_data';

@Component({
  selector: 'app-try-grid2',
  templateUrl: './try-grid2.component.html',
  styleUrls: ['./try-grid2.component.scss'],
})
export class TryGrid2Component implements OnInit {
  listData = [] as DummyData[];
  tableConfig: any;

  constructor() {}

  ngOnInit(): void {
    this.generateTableConfig();
    this.generateDummyData();
  }

  onActionClick(action: string, data: any) {
    console.log(action, data);
  }

  onRowClick(data: any) {
    alert(JSON.stringify(data));
  }

  generateDummyData() {
    const dummy: DummyData[] = [
      {
        id: 12345,
        name: 'Chandra Sukmagalih Arifin',
        position: 'Application Development Specialist',
        birthDate: new Date(),
      },
      {
        id: 23451,
        name: 'Joseph Tarigan',
        position: 'Application Development Coordinator',
        birthDate: new Date(),
      },
      {
        id: 34512,
        name: 'Ilham Kusuma Yuda',
        position: 'Application Development Specialist',
        birthDate: new Date(),
      },
    ];

    for (let i = 0; i < 10; i++)
      this.listData.push({
        ...dummy[i % 3],
        id: dummy[i % 3].id + i,
      });
  }

  generateTableConfig() {
    this.tableConfig = {
      columns: [
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
        {
          title: 'Birth Date',
          property: 'birthDate',
          sortable: false,
        },
        {
          title: 'Edit',
          property: 'action',
          type: 'edit',
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
      ],
      rowActions: [
        {
          label: 'Edit',
          actionIdToReturn: 'edit',
          logoImageUrl: '...',
          showOption: (x) => true,
        },
        {
          label: 'Copy',
          actionIdToReturn: 'copy',
          logoImageUrl: '...',
          showOption: (x) => x.completed,
        },
        {
          label: 'Delete',
          actionIdToReturn: 'delete',
          logoImageUrl: '...',
          showOption: (x) => !x.isActive,
        },
        {
          label: 'Message',
          actionIdToReturn: 'message',
          logoImageUrl: '...',
          showOption: (x) => x.permitsMessaging,
        },
      ],
    };
  }
}
