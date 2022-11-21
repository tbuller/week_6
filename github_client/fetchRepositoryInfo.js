const got = require('got');

const fetchRespositoryInfo = (receivedResponse) => {
  const responseObject = JSON.parse(receivedResponse.body);
  console.log(responseObject);
}

got('https://api.github.com/repos/sinatra/sinatra').then(fetchRespositoryInfo);