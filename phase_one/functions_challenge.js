const notifyByEmail = (email) => {
  console.log(`Email sent to: ${email}`);
}

const notifyByText = (number) => {
  console.log(`Message sent to: ${number}`);
}

const notify = (string, functionToUse) => {
  return functionToUse(string);
}

notify('hello@makers.tech.test', notifyByEmail);
notify('+10000000000', notifyByText);