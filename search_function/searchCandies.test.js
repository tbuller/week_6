const searchCandies = require('./search_candies')

describe('searchCandies', () => {
  it('returns a list of candies that match the beginning of the name and that are below the price given', () => {
    expect(searchCandies('Ae', 5)).toEqual(["Aero"]);
  });
  it('returns a list of candies that match the beginning of the name and that are below the price given', () => {
    expect(searchCandies('Ma', 10)).toEqual(["Mars", "Maltesers"]);
  });
  it('returns a list of candies that match the beginning of the name and that are below the price given', () => {
    expect(searchCandies('P', 5)).toEqual(["Pastila"]);
  });
  it('returns a list of candies that match the beginning of the name and that are below the price given', () => {
    expect(searchCandies('Fr', 10)).toEqual(["Fraise tagada"]);
  });
});