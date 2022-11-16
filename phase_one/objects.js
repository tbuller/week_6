const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

//console.log(person.address.city);
//console.log(person.hobbies[1]);

const cohort = {
  name: 'October 2022',
  id: 1234,
  students: ['Tim', 'Tom', 'Dave', 'Steve']
};

//console.log(cohort.name);

const cohortDisplay = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`);
}

//cohortDisplay(cohort);

const checkLength = (string) => {
  console.log((string.length <= 10));
}

const filterLongNumbers = (array) => {
  (array.filter(checkLength));
}

const numbers = ['10', '33333333333333', '5679', '24'];
//filterLongNumbers(numbers);

const generateMessages = (array) => {
  console.log(array.map(n => `Hi ${n.name}! ${n.discount}% off our best candies for you today!`));
}

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];
const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

generateMessages(namesAndDiscounts);