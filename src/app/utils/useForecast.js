import { useState, useEffect, useCallback } from "react";
import forecastApi from "./forecastApi";
import { getAirQuality } from "./getAirQuality";

export const useForecast = (initialLocation = "Hyderabad") => {
  const [weather, setWeather] = useState(null);
  const [highlights, setHighlights] = useState(null);
  const [airQuality, setAirQuality] = useState(null);

  const [location, setLocation] = useState(initialLocation);
  const [forecast, setForecast] = useState(null);
  const [citiesWeather, setCitiesWeather] = useState([]);
  const [temperatureUnit, setTemperatureUnit] = useState("C");
  const [loading, setLoading] = useState({
    weather: true,
    forecast: true,
    cities: true,
  });
  const [error, setError] = useState(null);
  const [cityError, setCityError] = useState(null);
  const [cities, setCities] = useState(["Karimnagar", "Dundigal"]);

  // Process highlights details to match component props
  const processHighlights = (weatherData) => {
    const { wind, main, visibility, sys } = weatherData;

    return {
      wind: `${wind?.speed || 0} m/s`,
      humidity: `${main?.humidity || 0}%`,
      uv: 0, // UV index placeholder
      pressure: `${main?.pressure || 0} hPa`,
      visibility: `${((visibility || 0) / 1000).toFixed(1)} km`,
      sunrise: sys?.sunrise
        ? new Date(sys.sunrise * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "N/A",
      sunset: sys?.sunset
        ? new Date(sys.sunset * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "N/A",
    };
  };

  // Fetch current weather and air quality
  const fetchWeather = useCallback(async (loc = location) => {
    if (!loc) return;

    setLoading((prev) => ({ ...prev, weather: true }));
    setError(null);
    setCityError(null);

    try {
      const weatherData = await forecastApi.getCurrentWeather(loc);
      setWeather(weatherData);
      setHighlights(processHighlights(weatherData));

      // Get air quality metrics
      const { coord } = weatherData;
      const airQualityData = await getAirQuality(
        coord.lat,
        coord.lon
      );

      setWeather({ ...weatherData, airQuality: airQualityData });
    } catch (err) {
      console.error("Failed to load weather:", err);
      setError(err.message || "Failed to fetch weather data");
    } finally {
      setLoading((prev) => ({ ...prev, weather: false }));
    }
  }, [location]);

  // Fetch 5-day forecast
  const fetchForecast = useCallback(async () => {
    if (!location) return;

    setLoading((prev) => ({ ...prev, forecast: true }));
    setError(null);

    try {
      const forecastData = await forecastApi.getForecast(location);
      // Filter to get one weather point per day (every 8th item)
      const dailyForecast = forecastData.list
        .filter((_, index) => index % 8 === 0)
        .slice(0, 8);
      setForecast(dailyForecast);
    } catch (err) {
      console.error("Failed to load forecast:", err);
      setError(err.message || "Failed to fetch forecast data");
    } finally {
      setLoading((prev) => ({ ...prev, forecast: false }));
    }
  }, [location]);

  // Fetch weather for other cities in the list
  const fetchCitiesWeather = useCallback(async () => {
    if (cities.length === 0) return;

    setLoading((prev) => ({ ...prev, cities: true }));
    setCityError(null);
    setError(null);

    try {
      const promises = cities.map((city) => forecastApi.getCurrentWeather(city));
      const results = await Promise.allSettled(promises);

      const successfulWeather = results
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value);

      setCitiesWeather(successfulWeather);
    } catch (err) {
      console.error("Failed to load cities weather:", err);
      setError(err.message || "Failed to fetch cities weather");
    } finally {
      setLoading((prev) => ({ ...prev, cities: false }));
    }
  }, [cities]);

  // Fetch data on location/watchlist updates
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchWeather(location);
      fetchForecast();
    }, 500);

    return () => clearTimeout(timer);
  }, [location, fetchWeather, fetchForecast]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCitiesWeather();
    }, 500);

    return () => clearTimeout(timer);
  }, [cities, fetchCitiesWeather]);

  // Add city to watchlist
  const addCity = async (cityName) => {
    setCityError(null);
    const trimmedCity = cityName.trim();
    if (!trimmedCity) return;

    if (cities.some((city) => city.toLowerCase() === trimmedCity.toLowerCase())) {
      const err = new Error("City already in list");
      setCityError(err.message);
      throw err;
    }

    try {
      const newCityWeather = await forecastApi.getWeather(trimmedCity);
      setCities((prev) => [...prev, trimmedCity]);
      setCitiesWeather((prev) => [...prev, newCityWeather]);
    } catch (error) {
      console.error("Failed to add city:", error);
      const errMsg = error.message || "Failed to add city";
      setCityError(errMsg);
      throw new Error(errMsg);
    }
  };

  // Remove city from watchlist
  const removeCity = (cityName) => {
    setCities((prev) => prev.filter((city) => city.toLowerCase() !== cityName.toLowerCase()));
    setCitiesWeather((prev) => prev.filter((city) => city.name.toLowerCase() !== cityName.toLowerCase()));
  };

  return {
    weather,
    highlights,
    airQuality,
    setAirQuality,
    location,
    setLocation,
    forecast,
    citiesWeather,
    setCitiesWeather,
    cityError,
    setCityError,
    cities,
    setCities,
    temperatureUnit,
    setTemperatureUnit,
    loading,
    error,
    addCity,
    removeCity,
  };
};

export default useForecast;
