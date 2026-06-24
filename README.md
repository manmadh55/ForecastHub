<div align="center">

# 🌦️ ForecastHub

**Modern Weather Forecasting Application** built with **Next.js, React, Tailwind CSS, and OpenWeatherMap API**. ForecastHub provides real-time weather conditions, 5-day forecasts, air quality monitoring, and an intuitive user experience for tracking weather across multiple locations.

<br/>

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge\&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeather_API-FFB703?style=for-the-badge)

<br/>

![Weather Forecast](https://img.shields.io/badge/Real_Time-Weather-success?style=flat-square)
![Air Quality](https://img.shields.io/badge/AQI-Monitoring-blue?style=flat-square)
![Responsive UI](https://img.shields.io/badge/Responsive-Design-orange?style=flat-square)
![Forecast](https://img.shields.io/badge/5_Day-Forecast-purple?style=flat-square)

</div>

---

# 🌍 Project Overview

ForecastHub is a weather forecasting platform that enables users to monitor current weather conditions, air quality, and upcoming forecasts for cities around the world.

The application integrates live weather APIs to provide:

* Real-time weather updates
* 5-day weather forecasts
* Air Quality Index (AQI) information
* Multi-city weather tracking
* Dynamic weather visualizations
* Responsive user experience

---

# 🏗️ System Architecture

```text
User Search
     │
     ▼
Weather API Request
(OpenWeatherMap)
     │
     ▼
Data Processing
     │
     ▼
Weather Information
(Current + Forecast)
     │
     ▼
Air Quality Data
     │
     ▼
ForecastHub Dashboard
```

---

# 🛠️ Tech Stack

| Category   | Technology         |
| ---------- | ------------------ |
| Frontend   | Next.js            |
| UI Library | React.js           |
| Styling    | Tailwind CSS       |
| API        | OpenWeatherMap API |
| Language   | JavaScript         |
| Deployment | Vercel             |

---

# ✨ Features

### 🌤️ Real-Time Weather

* Current temperature
* Weather conditions
* Humidity
* Wind speed
* Feels-like temperature

### 📅 5-Day Forecast

* Daily weather predictions
* Temperature trends
* Forecast summaries

### 🌫️ Air Quality Monitoring

* AQI Information
* Pollution level insights
* Health recommendations

### 📱 Responsive Design

* Mobile friendly
* Tablet support
* Desktop optimized

### 🌎 Multi-City Tracking

* Search any city
* Track multiple locations
* Quick weather comparison

---

# 📁 Repository Structure

```text
ForecastHub/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── services/
│   └── utils/
│
├── public/
│
├── package.json
├── tailwind.config.js
├── next.config.js
├── README.md
└── .gitignore
```

---

# ⚙️ API Integration

ForecastHub uses the OpenWeatherMap API for:

* Current Weather Data
* 5-Day Weather Forecasts
* Air Quality Index Data
* Geolocation-Based Search

---

# 🚀 How to Run

### Clone Repository

```bash
git clone https://github.com/manmadh55/ForecastHub.git
cd ForecastHub
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key
```

### Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 📷 Application Screenshots

## Home Page

Add screenshot here

## Weather Dashboard

Add screenshot here

## Air Quality Section

Add screenshot here

---

# 🎯 Future Improvements

* Weather Alerts & Notifications
* Hourly Forecasts
* Weather Maps
* User Authentication
* Favorite Locations
* Dark / Light Theme Toggle
* Historical Weather Analytics

---

# 👨‍💻 Author

**Manmadh Gonela**

Computer Science Student | Machine Learning Enthusiast | Full Stack Developer

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
