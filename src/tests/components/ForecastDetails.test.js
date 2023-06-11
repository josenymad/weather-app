import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("Forecast Details", () => {
  const validProps = {
    date: 1525046400000,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 30,
    wind: {
      speed: 60,
      direction: "North",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText("Mon Apr 30 2018")).toHaveClass("forecast-details__date");
    expect(getByText("Maximum temperature: 22°C")).toHaveClass(
      "forecast-details__max-temp"
    );
    expect(getByText("Minimum temperature: 12°C")).toHaveClass(
      "forecast-details__min-temp"
    );
    expect(getByText("Humidity: 30%")).toHaveClass(
      "forecast-details__humidity"
    );
    expect(getByText("Wind speed: 60mph")).toHaveClass(
      "forecast-details__wind-speed"
    );
    expect(getByText("Wind direction: North")).toHaveClass(
      "forecast-details__wind-direction"
    );
  });
});
