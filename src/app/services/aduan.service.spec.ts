import { TestBed } from '@angular/core/testing';

import { AduanService } from './aduan.service';

describe('AduanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AduanService = TestBed.get(AduanService);
    expect(service).toBeTruthy();
  });
});
