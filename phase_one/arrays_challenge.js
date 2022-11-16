const addToBatch = (array, number) => {
  if (array.length >= 5) {
    return array;
  } else {
    return array.concat(number);
  }
}

console.log(addToBatch([1, 2, 3], 7));
console.log(addToBatch([1, 2, 3, 4, 5], 7));
console.log(addToBatch([1, 2, 3], 10));
console.log(addToBatch([5, 7, 3, 9, 10, 7, 6], 20));