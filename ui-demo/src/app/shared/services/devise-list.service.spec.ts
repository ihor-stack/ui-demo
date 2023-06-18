import { TestBed } from '@angular/core/testing';

import { DeviseListService } from './devise-list.service';

describe('DeviseListService', () => {
  let service: DeviseListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviseListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
