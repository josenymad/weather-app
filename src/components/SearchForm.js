import React from "react";
import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="City"
        className="search-form__input"
        onChange={handleInputChange}
        value={searchText}
      />
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
