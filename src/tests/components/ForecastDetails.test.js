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
      direction: "n",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText("Mon Apr 30 2018")).toBeInTheDocument();
    expect(getByText("🌡 Top temperature: 22°C")).toBeInTheDocument();
    expect(getByText("🌡 Minimum temperature: 12°C")).toBeInTheDocument();
    expect(getByText("💧 Humidity: 30%")).toBeInTheDocument();
    expect(getByText("💨 Wind speed: 60mph")).toBeInTheDocument();
    expect(getByText("🧭 Wind direction: N")).toBeInTheDocument();
  });
});
