import React from "react";
import ForecastSummary from "./ForecastSummary";

function ForecastSummaries({ forecasts }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          temperature={forecast.temperature}
          icon={forecast.icon}
        />
      ))}
    </div>
  );
}

export default ForecastSummaries;
