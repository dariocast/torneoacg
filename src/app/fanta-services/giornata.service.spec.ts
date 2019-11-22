import { TestBed } from '@angular/core/testing';

import { GiornataService } from './giornata.service';

describe('GiornataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiornataService = TestBed.get(GiornataService);
    expect(service).toBeTruthy();
  });
});
