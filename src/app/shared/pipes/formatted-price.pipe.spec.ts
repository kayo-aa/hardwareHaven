import { FormattedPricePipe } from './formatted-price.pipe';

describe('FormattedPricePipe', () => {
  it('create an instance', () => {
    const pipe = new FormattedPricePipe();
    expect(pipe).toBeTruthy();
  });
});
