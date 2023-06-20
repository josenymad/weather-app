import axios from "axios";

const getForecast = async (
  setSelectedDate,
  setForecasts,
  setLocation,
  searchText,
  setErrorMessage
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    setErrorMessage("");
    endpoint += `?city=${searchText}`;
  }

  try {
    const res = await axios.get(endpoint);
    setSelectedDate(res.data.forecasts[0].date);
    setForecasts(res.data.forecasts);
    setLocation(res.data.location);
  } catch (error) {
    const { status } = error.response;

    if (status === 404) {
      setErrorMessage(
        `${searchText} is not a valid location, please try another.`
      );
    }
    if (status === 500) {
      setErrorMessage(
        "Oh no, there's an error with the server. Please try again later."
      );
    }
  }
};
export default getForecast;
