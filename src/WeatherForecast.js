import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import Axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.date);
  }
  let apiKey = "7059cb165caa3316bff682d263a01b1e";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  Axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19º</span>
            <span className="WeatherForecast-temp-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
