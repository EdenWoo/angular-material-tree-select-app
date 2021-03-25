import { TestBed } from '@angular/core/testing';

import { AngularMaterialTreeSelectService } from './angular-material-tree-select.service';

describe('AngularMaterialTreeSelectService', () => {
  let service: AngularMaterialTreeSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularMaterialTreeSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
