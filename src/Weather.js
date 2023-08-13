import React, { useState } from "react";
import Weatherinfo from "./Weatherinfo";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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

  function search() {
    const apiKey = "7059cb165caa3316bff682d263a01b1e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="Weather">
          <div className="searchandsubmit">
            <form id="search-form" onSubmit={handleSubmit}>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Type a city..."
                  aria-label="Search"
                  aria-describedby="search-addon"
                  id="citySearch"
                  autocomplete="off"
                  onChange={handleCityChange}
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
          <Weatherinfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
