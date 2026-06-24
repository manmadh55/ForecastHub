import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
// Note: In a real application, this should be stored in an environment variable and not hardcoded
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const forecastApi = {
  // Fetch current weather for a city
  getCurrentWeather: async (city) => {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to load current weather"
      );
    }
  },

  // Fetch 5-day weather forecast
  getForecast: async (city) => {
    try {
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to load weather forecast"
      );
    }
  },

  // Fetch forecast weather for multiple cities (currently unused)
  getMultipleCitiesWeather: async (cities) => {
    try {
      const promises = cities.map((city) =>
        axios.get(`${BASE_URL}/forecast`, {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
          },
        })
      );
      const responses = await Promise.all(promises);
      return responses.map((response) => response.data);
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to load watchlist weather"
      );
    }
  },

  // Helper alias to fetch weather
  getWeather: async (city) => {
    return forecastApi.getCurrentWeather(city);
  },
};

export default forecastApi;
