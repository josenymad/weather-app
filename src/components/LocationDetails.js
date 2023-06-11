import React from "react";

function LocationDetails(props) {
  const { city, country } = props;

  return <h2 className="location">{`${city}, ${country}`}</h2>;
}

export default LocationDetails;
