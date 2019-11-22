import { TestBed } from '@angular/core/testing';

import { VotiService } from './voti.service';

describe('VotiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VotiService = TestBed.get(VotiService);
    expect(service).toBeTruthy();
  });
});
