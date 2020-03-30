import { TestBed } from '@angular/core/testing';

import { SamochodSerwisService } from './samochod-serwis.service';

describe('SamochodSerwisService', () => {
  let service: SamochodSerwisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamochodSerwisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
