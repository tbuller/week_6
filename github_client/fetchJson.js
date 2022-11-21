const got = require('got');

const fetchJson = (response) => {
  const responseObject = JSON.parse(response.body);
  console.log(responseObject);
}

got('https://jsonplaceholder.typicode.com/todos').then(fetchJson);