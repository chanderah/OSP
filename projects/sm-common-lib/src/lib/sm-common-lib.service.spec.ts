import { TestBed } from '@angular/core/testing';

import { SmCommonLibService } from './sm-common-lib.service';

describe('SmCommonLibService', () => {
  let service: SmCommonLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmCommonLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
