import { Component, OnInit } from '@angular/core';
import { DummyData } from 'src/app/interface/dummy_data';

@Component({
  selector: 'app-try-grid',
  templateUrl: './try-grid.component.html',
  styleUrls: ['./try-grid.component.scss'],
})
export class TryGridComponent implements OnInit {
  listData = [] as DummyData[];
  displayedColumns: string[] = [
    'id',
    'name',
    'position',
    'birthDate',
    'actions',
  ];

  constructor() {}

  ngOnInit(): void {
    this.generateDummyData();
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

  function1(data: any) {
    alert(data);
  }

  function2(data: any) {
    console.log(data);
  }
}
