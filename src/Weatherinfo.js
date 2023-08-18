import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="info-now">
        <div className="col-6">
          <div className="current-weather">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              id="currenticon"
              className="currenticon"
            />

            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>

        <div className="row firstrow">
          <div className="col-4">
            <div className="info-now">
              <h1 id="city">{props.data.city}</h1>
              <h3>{props.data.description}</h3>
              <h2>
                Last updated: <FormattedDate date={props.data.date} />{" "}
              </h2>
            </div>
          </div>

          <div className="col-4">
            <div className="d-flex weather-details">
              <ul>
                <li>
                  Humidity: {props.data.humidity} <span id="humidity"></span>%
                </li>
                <li>
                  Wind: {props.data.wind} <span id="wind"></span>km/h
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
      </div>
    </div>
  );
}
