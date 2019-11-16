import { PollUser } from './poll-user.model';

describe('PollUser', () => {
  it('should create an instance', () => {
    expect(new PollUser(0,0,0)).toBeTruthy();
  });
});
