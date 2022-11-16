const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise tagada', price: 5.99 }
];

const searchCandies = (name, price) => {
  return candies.map(candy => name === candy.name.substring(0, (name.length)) && candy.price < price ? candy.name : false).filter(Boolean);
}

//console.log(searchCandies('Ma', 10));
//console.log(searchCandies('Gumm', 20));

module.exports = searchCandies