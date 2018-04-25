import { TestBed, inject } from '@angular/core/testing';

import { RugService } from './rug.service';

describe('RugService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RugService]
    });
  });

  it('should be created', inject([RugService], (service: RugService) => {
    expect(service).toBeTruthy();
  }));
});
