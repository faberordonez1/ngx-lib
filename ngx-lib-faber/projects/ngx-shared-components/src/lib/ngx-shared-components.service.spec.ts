import { TestBed } from '@angular/core/testing';

import { NgxSharedComponentsService } from './ngx-shared-components.service';

describe('NgxSharedComponentsService', () => {
  let service: NgxSharedComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSharedComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
