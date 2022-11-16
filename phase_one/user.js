class User {

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}


const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

class UserBase {

  constructor(users) {
    this.users = users;
  }

  getNames() {
    return this.users.map(u => u.name);
  }

  getIntroductions() {
    return this.users.map(u => `Hello, my name is ${u.name}`);
  }
}

const base = new UserBase(users);
console.log(base.getNames());
console.log(base.getIntroductions());

module.exports = User;

