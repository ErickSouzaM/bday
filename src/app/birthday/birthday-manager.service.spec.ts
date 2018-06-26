import { TestBed, inject } from '@angular/core/testing';

import { BirthdayManagerService } from './birthday-manager.service';

describe('BirthdayManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BirthdayManagerService]
    });
  });

  it('should be created', inject([BirthdayManagerService], (service: BirthdayManagerService) => {
    expect(service).toBeTruthy();
  }));
});
