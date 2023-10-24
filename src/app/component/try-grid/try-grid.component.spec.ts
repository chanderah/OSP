import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryGridComponent } from './try-grid.component';

describe('TryGridComponent', () => {
  let component: TryGridComponent;
  let fixture: ComponentFixture<TryGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TryGridComponent]
    });
    fixture = TestBed.createComponent(TryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
