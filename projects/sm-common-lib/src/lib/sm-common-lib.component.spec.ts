import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmCommonLibComponent } from './sm-common-lib.component';

describe('SmCommonLibComponent', () => {
  let component: SmCommonLibComponent;
  let fixture: ComponentFixture<SmCommonLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmCommonLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmCommonLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
