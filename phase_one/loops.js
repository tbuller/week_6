for (let i = 1 ; i <= 20 ; i++) {
  if (i % 2 === 0) {
    console.log(i + ' is even');
  } else {
    console.log(i + ' is odd');
  }
};

const fizzbuzzUntil = (limit) => {
  for (let n = 1 ; n <= limit ; n++) {
    if (n % 3 === 0 && n % 5 !== 0) {
      console.log('fizz');
    } else if (n % 5 === 0 && n % 3 !== 0) {
      console.log('buzz');
    } else if (n % 3 === 0 && n % 5 === 0) {
      console.log('fizzbuzz');
    } else {
      console.log(n);
    } }
};

module.exports = fizzbuzzUntil;