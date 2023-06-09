import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../components/App";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Weather App header", () => {
    render(<App />);
    const appHeader = screen.getByText("Weather App");
    expect(appHeader).toBeInTheDocument();
  });
});
