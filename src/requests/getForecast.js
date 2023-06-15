import axios from "axios";

const getForecast = (setSelectedDate, setForecasts, setLocation) => {
  const endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  return axios
    .get(endpoint)
    .then((res) => {
      setSelectedDate(res.data.forecasts[0].date);
      setForecasts(res.data.forecasts);
      setLocation(res.data.location);
    })
    .catch((error) => {
      console.error(error);
    });
};
export default getForecast;
