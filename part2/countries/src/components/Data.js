import { useEffect, useState } from "react";
import weatherService from "../services/weather";

const Data = ({ country }) => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    weatherService.getWeatherData(country.capital[0]).then((response) => {
      const data = response;
      setWeatherData(data);
    });
  });

  if (Object.keys(weatherData).length === 0) {
    return null;
  } else {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital[0]}</p>
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

        {/* <h2> Weather in {country.capital[0]}</h2>
        <p>Temperature: {weatherData.main.temp - 273.15} Celsius</p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={`${country.capital[0]} weather icon`}
        />
        <p>Wind {weatherData.wind.speed} m/s</p> */}
      </div>
    );
  }
};

export default Data;
