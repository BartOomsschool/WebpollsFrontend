import { Vriend } from './vriend.model';

describe('Vriend', () => {
  it('should create an instance', () => {
    expect(new Vriend(0,"","")).toBeTruthy();
  });
});
