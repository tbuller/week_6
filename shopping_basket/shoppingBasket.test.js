const ShoppingBasket = require('./shoppingBasket')

describe('class ShoppingBasket', () => {
  it('returns the total price', () => {
    const fakeCandy1 = {
      getPrice: () => 5
    }
    const fakeCandy2 = {
      getPrice: () => 8
    }
    const fakeCandy3 = {
      getPrice: () => 7
    }
    const fakeCandy4 = {
      getPrice: () => 12
    }

    let basket = new ShoppingBasket([fakeCandy1]);
    basket.addItem(fakeCandy2);
    basket.addItem(fakeCandy3);
    basket.addItem(fakeCandy4);

    
    expect(basket.getTotalPrice()).toBe(32);


  });
});