const lowercaseMessage = (string) => {
  console.log(string.toLowerCase());
}

const transform = (string, transformFunction) => {
  return transformFunction(string);
}

transform('This SHOULD all be in lowercase NOW', lowercaseMessage);