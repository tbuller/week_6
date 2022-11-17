class ShoppingBasket {

  constructor(items = []) {
    this.items = items;
  }

  getTotalPrice() {
    let total = 0
    for (let index = 0; index < this.items.length; index++) {
      const candy = this.items[index];
      total += candy.getPrice();
    }
    return total
  }

  addItem(candy) {
    this.items.push(candy);
  }

}

module.exports = ShoppingBasket;