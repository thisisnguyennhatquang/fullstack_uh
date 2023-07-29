import axios from "axios";

const getWeatherData = (lat, lng) => {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}`
  );
  return request.then((response) => response.data);
};

const weatherService = { getWeatherData };

export default weatherService;
