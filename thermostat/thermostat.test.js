const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('returns the current temperature', () => {
    let thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });
  it('returns the current temperature', () => {
    let thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(18);
  });
  it('stops the temperature going up when the power saving mode is on', () => {
    let thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(25);
  });
  it('it allows the temperature to keep going up when power saving mode is off', () => {
    let thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(29);
  });
  it('it prevents the temperature from going below 10', () => {
    let thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(10);
  });
  it('it resets the temperature to 20', () => {
    let thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });
});