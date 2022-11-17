const Candy = require('./candy')

describe('candy', () => {
  it('creates an instance that we can call methods on', () => {
    const candy = new Candy('Mars bar', 8)

    expect(candy.getName()).toBe('Mars bar');
  });
  it('creates an instance that we can call methods on', () => {
    const candy = new Candy('Mars bar', 8)

    expect(candy.getPrice()).toBe(8);
  });
});