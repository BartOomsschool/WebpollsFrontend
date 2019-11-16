import { TestBed } from '@angular/core/testing';

import { VriendUserService } from './vriend-user.service';

describe('VriendUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VriendUserService = TestBed.get(VriendUserService);
    expect(service).toBeTruthy();
  });
});
