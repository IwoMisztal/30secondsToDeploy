import { TestBed, inject } from '@angular/core/testing';

import { FinalscoreService } from './finalscore.service';

describe('FinalscoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinalscoreService]
    });
  });

  it('should be created', inject([FinalscoreService], (service: FinalscoreService) => {
    expect(service).toBeTruthy();
  }));
});
