import React from "react";
import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <label htmlFor="search-location" className="search-form__label">
        <input
          type="text"
          id="search-location"
          placeholder="City"
          name="search-location"
          className="search-form__input"
          onChange={handleInputChange}
          value={searchText}
        />
      </label>
      <input
        type="submit"
        value="Search"
        className="search-form__submit"
        onClick={onSubmit}
      />
    </div>
  );
}

export default SearchForm;
