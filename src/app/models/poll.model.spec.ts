import { Poll } from './poll.model';

describe('Poll', () => {
  it('should create an instance', () => {
    expect(new Poll(1,"")).toBeTruthy();
  });
});
