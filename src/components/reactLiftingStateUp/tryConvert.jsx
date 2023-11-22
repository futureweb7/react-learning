export const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

export const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

export const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  return Number.isNaN(input) ? "" : convert(input).toFixed(3);
};

