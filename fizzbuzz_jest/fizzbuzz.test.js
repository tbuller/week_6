const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  it('returns appropriate fizzbuzz', () => {
    expect(fizzbuzz(20)).toBe('buzz');
  });
  it('returns appropriate fizzbuzz', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
  });
  it('returns appropriate fizzbuzz', () => {
    expect(fizzbuzz(9)).toBe('fizz');
  });
  it('returns appropriate fizzbuzz', () => {
    expect(fizzbuzz(8)).toBe(8);
  });
});