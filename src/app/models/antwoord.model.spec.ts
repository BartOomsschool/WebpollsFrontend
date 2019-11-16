import { Antwoord } from './antwoord.model';

describe('Antwoord', () => {
  it('should create an instance', () => {
    expect(new Antwoord(1,"",2)).toBeTruthy();
  });
});
