import { VriendUser } from './vriend-user.model';

describe('VriendUser', () => {
  it('should create an instance', () => {
    expect(new VriendUser(0,0,0)).toBeTruthy();
  });
});
