import { TestBed } from '@angular/core/testing';

import { GCComputerScienceHOFService } from './gccomputer-science-hof.service';

describe('GCComputerScienceHOFService', () => {
  let service: GCComputerScienceHOFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GCComputerScienceHOFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
