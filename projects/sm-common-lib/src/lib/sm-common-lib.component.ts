import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sm-sm-common-lib',
  encapsulation: ViewEncapsulation.None,
  template: `
    <p>Hi from sm-common-lib!</p>
  `,
  styles: []
})
export class SmCommonLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
