# ForecastHub 🌦️

## Project Overview
ForecastHub is a modern, responsive web application designed as a final-year Computer Science senior capstone project. The objective of the project is to build a user-friendly, real-time weather dashboard that allows users to monitor weather conditions across multiple cities globally. The application leverages modern web technologies to deliver a fluid user experience featuring dynamic UI backgrounds matched to current weather conditions, timezone-aligned local clocks, and comprehensive meteorological data.

---

## Objective
The primary goal of this project was to design and implement a single-page weather dashboard that integrates external REST APIs, manages complex asynchronous state, and presents data through a responsive and modern user interface. Key focus areas included:
1. **Asynchronous API Integration**: Communicating with multiple third-party endpoints to fetch current weather, air quality indices, and multi-day forecasts.
2. **Dynamic UI Adjustments**: Utilizing Tailwind CSS and custom React hooks to adapt the visual styling of the site (e.g., backgrounds, colors) to reflect real-time weather conditions and time of day.
3. **Optimized State Management**: Maintaining a local watch-list of favorite cities and synchronization of temperature units (Celsius/Fahrenheit) across all dashboard panels.

---

## Technologies Used
The project is built on top of a standard MERN-adjacent frontend stack using the following modern web technologies:
- **Framework**: Next.js 15 (React 19) for server-side rendering, routing, and component architecture.
- **Styling**: Tailwind CSS & Vanilla CSS for responsive grid layouts, glassmorphic card designs, and transition animations.
- **Asynchronous HTTP Client**: Axios for clean, promise-based API request handling.
- **Date & Time Utilities**: Moment Timezone for calculating and displaying localized city times based on timezone offsets.
- **Icons**: React Icons (FontAwesome library) for consistent vector icon presentation.
- **Animations**: Framer Motion for smooth slide-ins, fade-ups, and interactive scaling animations.

---

## API Integration
ForecastHub integrates with the **OpenWeatherMap API** to retrieve real-time global weather details:
1. **Current Weather Endpoint (`/weather`)**: Used to fetch temperature, humidity, wind speed, atmospheric pressure, visibility, and weather condition codes for the primary searched city as well as the favorite cities watchlist.
2. **5-Day Forecast Endpoint (`/forecast`)**: Retrieves forecast snapshots in 3-hour increments. The application processes this data to show a clean 5-day daily forecast trend.
3. **Air Quality Endpoint (`/air_pollution`)**: Queries index rankings and specific pollutant metrics (carbon monoxide, nitrogen dioxide, ozone) using latitude and longitude coordinates obtained from the weather queries.

All API communication is centralized within a modularized utility class (`forecastApi.js`) to decouple data fetching from React component rendering logic.

---

## Features Implemented
- **Glassmorphic UI**: Sleek glass panels with frosted borders and backdrop filters.
- **Weather Watchlist**: Interactive sidebar allowing users to add or remove favorite cities. Watchlist data is retrieved dynamically.
- **Location Search**: Fast city searches utilizing a debounced location-state listener to prevent excessive API rate-limiting.
- **Dynamic Backgrounds**: Responsive canvas gradients that automatically update based on the current weather condition (e.g., clear, rainy, cloudy, snowy) and time of day (day vs. night mode).
- **Timezone Sync**: Automatically displays the correct current local date and time of the searched city instead of the client machine's local time.
- **Temperature Toggle**: Global unit conversions between Metric (Celsius) and Imperial (Fahrenheit) scales.

---

## Challenges Faced
1. **API Rate Limiting & Debouncing**: Initially, rapid typings or quick transitions in search input caused redundant API requests. To resolve this, a 500ms debounce timer was introduced to ensure weather queries are only executed once search states have settled.
2. **Timezone Offset Calculations**: OpenWeatherMap returns timezone shifts in seconds from UTC. Aligning these shifts with Moment.js to display the correct weekday and time for foreign cities required custom parsing functions to prevent timezone leaks from the user's browser setting.
3. **Layout Congruency**: Creating a glassmorphic look that remains fully legible under highly contrasting weather backgrounds required carefully tuned semi-transparent card overlays (`bg-white/10` with custom borders).

---

## Future Improvements
- **Persistent Storage**: Integrate local storage or a MongoDB database backend to persist the user's city watchlist across page refreshes and sessions.
- **Autocomplete Search**: Build an autocomplete city input dropdown using the Geocoding API to prevent misspelled search errors.
- **Historical Data Visualization**: Introduce Chart.js or Recharts to map historical weather trends and temperature changes over the past weeks.
- **User Accounts**: Implement OAuth/JWT authentication to let different users save personal weather preferences and watchlists.
