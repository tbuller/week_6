class Thermostat {
  
  constructor(temp = 20, max = 32, min = 10) {
    this.temp = temp;
    this.max = max;
    this.min = min;
  }

  setPowerSavingMode(boolean) {
    if (boolean === true) {
      this.max = 25;
    } else {
      this.max = 32;
    }
  }

  up() {
    if (this.temp < this.max) {
    this.temp += 1;
    } else {
      return 'Maximum temperature has been reached';
    }
  }

  down() {
    if (this.temp > this.min) {
      this.temp -= 1;
      } else {
        return 'Minimum temperature has been reached';
      }
  }

  getTemperature() {
    return this.temp;
  }

  reset() {
    this.temp = 20;
  }
}

module.exports = Thermostat