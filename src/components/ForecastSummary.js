import React from "react";

function ForecastSummary(props) {
  const { date, temperature, description, icon } = props;

  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <div className="forecast-summary__icon" data-testId="forecast-icon">
        {icon}
      </div>
    </div>
  );
}

export default ForecastSummary;
