import { TestBed, inject } from '@angular/core/testing';

import { TermServiceService } from './term-service.service';

describe('TermServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TermServiceService]
    });
  });

  it('should be created', inject([TermServiceService], (service: TermServiceService) => {
    expect(service).toBeTruthy();
  }));
});
