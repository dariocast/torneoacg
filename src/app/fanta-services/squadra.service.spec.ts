import { TestBed } from '@angular/core/testing';

import { SquadraService } from './squadra.service';

describe('SquadraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SquadraService = TestBed.get(SquadraService);
    expect(service).toBeTruthy();
  });
});
