// Utility functions for temperature conversion and formatting

export const convertTemperature = (temp, unit = "C") => {
  if (temp === undefined || temp === null || isNaN(temp)) return null;

  const temperature = parseFloat(temp);

  if (unit === "F") {
    return (temperature * 9) / 5 + 32;
  }

  return temperature;
};

export const formatTemperature = (temp, unit = "C") => {
  if (temp === undefined || temp === null || isNaN(temp)) return "--";

  const temperature = parseFloat(temp);
  return `${Math.round(temperature)}°${unit}`;
};
