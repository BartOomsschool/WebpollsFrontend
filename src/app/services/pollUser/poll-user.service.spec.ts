import { TestBed } from '@angular/core/testing';

import { PollUserService } from './poll-user.service';

describe('PollUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PollUserService = TestBed.get(PollUserService);
    expect(service).toBeTruthy();
  });
});
