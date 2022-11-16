const add = require('./add');
const multiply = require('./multiply');

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });
});

describe('multiply', () => {
  it('multiplies 3 and 4', () => {
    expect(multiply(3, 4)).toBe(12);
  });
});