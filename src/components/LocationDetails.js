import React from "react";

function LocationDetails(props) {
  const { city, country, errorMessage } = props;
  LocationDetails.defaultProps = {
    errorMessage: "",
  };

  return errorMessage ? (
    <h3>{errorMessage}</h3>
  ) : (
    <h2 className="location">{`${city}, ${country}`}</h2>
  );
}

export default LocationDetails;
