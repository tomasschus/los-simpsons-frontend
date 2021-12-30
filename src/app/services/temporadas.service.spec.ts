import { TestBed, inject } from '@angular/core/testing';

import { TemporadasService } from './temporadas.service';

describe('TemporadasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemporadasService]
    });
  });

  it('should be created', inject([TemporadasService], (service: TemporadasService) => {
    expect(service).toBeTruthy();
  }));
});
