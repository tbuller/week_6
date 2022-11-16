const names = ['Tim', 'Ross', 'Dad', 'John', 'Amy'];

console.log(names.length);
console.log(names[1]);

const namesUpdated = names.concat('Robin');
console.log(namesUpdated.length);
console.log(namesUpdated);


let counter = 0;
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

nums.forEach((number) => {
  counter += number;
})

console.log(counter);