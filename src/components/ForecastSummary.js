import React from "react";

function ForecastSummary(forecastData) {
  const { date, temperature, description, icon } = forecastData;

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {icon}
      </div>
    </div>
  );
}

export default ForecastSummary;
