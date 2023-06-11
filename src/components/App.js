import React from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

function App({ location, forecasts }) {
  const { city, country } = location;

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

export default App;
