const getNumberSign = (a) => {
  if (a === 0) {
    console.log('zero');
  } else if (a < 0) {
    console.log('negative');
  } else {
    console.log('positive');
  }
} 

const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length === validLength) {
    console.log(true);
  } else {
    console.log(false);
  }
};

const fizzbuzz = (n) => {
  if (n % 3 === 0 && n % 5 !== 0) {
    console.log('fizz');
  } else if (n % 5 === 0 && n % 3 !== 0) {
    console.log('buzz');
  } else if (n % 3 === 0 && n % 5 === 0) {
    console.log('fizzbuzz');
  } else {
    console.log(n);
  }
};

fizzbuzz(15);
fizzbuzz(4);
fizzbuzz(7);
fizzbuzz(19);
fizzbuzz(18);
fizzbuzz(9);
fizzbuzz(30);
fizzbuzz(20);