import axios from "axios";
import { useEffect, useState } from "react";

const api_key = process.env.REACT_APP_API_KEY;

const Data = ({ country }) => {
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${api_key}`;

  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setWeatherData(response.data);
    });
  });

  if (Object.keys(weatherData).length === 0) {
    console.log("Returning null");
    return null;
  } else {
    console.log("Rendering country data");
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <p>
          <b>Languages:</b>
        </p>
        <ul>
          {Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`${country.name.common} flag`} />

        <h2> Weather in {country.capital}</h2>
        <p>Temperature: {weatherData.main.temp - 273.15} Celsius</p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather.icon}@2x.png`}
          alt={`${country.capital} weather icon`}
        />
        <p>Wind {weatherData.wind.speed} m/s</p>
      </div>
    );
  }
};

export default Data;
