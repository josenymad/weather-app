import axios from "axios";

const getForecast = async (
  setSelectedDate,
  setForecasts,
  setLocation,
  searchText
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  try {
    const res = await axios.get(endpoint);
    setSelectedDate(res.data.forecasts[0].date);
    setForecasts(res.data.forecasts);
    setLocation(res.data.location);
  } catch (error) {
    console.error(error);
  }
};
export default getForecast;
