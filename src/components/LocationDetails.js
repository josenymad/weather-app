import React from "react";

function LocationDetails(props) {
  const { city, country } = props;

  return <h1 className="location">{`${city}, ${country}`}</h1>;
}

export default LocationDetails;
