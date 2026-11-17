import { MakeCountryPipe } from './make-country-pipe';

describe('MakeCountryPipe', () => {
  it('create an instance', () => {
    const pipe = new MakeCountryPipe();
    expect(pipe).toBeTruthy();
  });
});
