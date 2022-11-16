class ShoppingBasket {

  constructor(item, total =[item.price]) {
    this.item = item;
    this.total = total;
  }

  getTotalPrice() {
    return this.total.reduce((a, b) => a + b);
  }

  addItem(candy) {
    this.total.push(candy.price);
  }

}

class Candy {

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

const candy = new Candy('Mars', 3);
const basket = new ShoppingBasket(candy);

console.log(basket.getTotalPrice());
basket.addItem(new Candy('Hershey', 7));
basket.addItem(new Candy('Tolberone', 4));
console.log(basket.getTotalPrice());

module.exports = ShoppingBasket;