import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/064/933/original/04n_2x.png?1674984552`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="Weather">
          <div className="searchandsubmit">
            <form id="search-form">
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Type a city..."
                  aria-label="Search"
                  aria-describedby="search-addon"
                  id="citySearch"
                  autocomplete="off"
                />
                <button
                  className="input-group-text border-0"
                  id="search-addon"
                  type="submit"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="info-now">
            <div className="col-6">
              <div className="current-weather">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="currenticon"
                  className="currenticon"
                />

                <span className="temperature" id="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">
                  <a href="#" id="celsius-link" className="active">
                    °C
                  </a>{" "}
                  |
                  <a href="#" id="fahrenheit-link" className="inactive">
                    °F
                  </a>
                </span>
              </div>
            </div>

            <div className="row firstrow">
              <div className="col-4">
                <div className="info-now">
                  <h1 id="city">{weatherData.city}</h1>
                  <h3>{weatherData.description}</h3>
                  <h2>
                    Last updated: <FormattedDate date={weatherData.date} />{" "}
                  </h2>
                </div>
              </div>

              <div className="col-4">
                <div className="d-flex weather-details">
                  <ul>
                    <li>
                      Humidity: {weatherData.humidity}{" "}
                      <span id="humidity"></span>%
                    </li>
                    <li>
                      Wind: {weatherData.wind} <span id="wind"></span>km/h
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-4">
                <div className="kirbyimage">
                  <img
                    className="kirby"
                    src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/065/728/original/0a4c012cc7d2124853dd9ee86c535ca2.gif?1675470126"
                  />
                </div>
              </div>
            </div>

            <div className="weather-forecast" id="forecast">
              <div className="row">
                <div className="col-2">
                  <div className="weather-forecast-date">Thursday</div>
                  <img
                    src="http://openweathermap.org/img/wn/02d@2x.png"
                    alt=""
                    width="42"
                    className="forecasticon"
                  />
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temperature-max">
                      {" "}
                      18°{" "}
                    </span>
                    <span className="weather-forecast-temperature-min">
                      {" "}
                      12°{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7059cb165caa3316bff682d263a01b1e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
