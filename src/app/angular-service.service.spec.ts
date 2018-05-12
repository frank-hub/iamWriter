import { TestBed, inject } from '@angular/core/testing';

import { AngularServiceService } from './angular-service.service';

describe('AngularServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularServiceService]
    });
  });

  it('should be created', inject([AngularServiceService], (service: AngularServiceService) => {
    expect(service).toBeTruthy();
  }));
});
