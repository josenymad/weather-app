import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("Search Form", () => {
  const validProps = {
    searchText: "Test searchText",
    setSearchText: "Test setSearchText",
    onSubmit: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("has a submit button", () => {
    const { getByRole } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("tests the submit button has 'Search' value", () => {
    const { getByRole } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(getByRole("button")).toHaveValue("Search");
  });

  it("Search button calls passed down function", () => {
    const { getByRole } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    fireEvent.click(getByRole("button"));
    expect(validProps.onSubmit).toHaveBeenCalled();
  });
});
