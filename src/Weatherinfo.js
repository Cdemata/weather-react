import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="info-now">
        <div className="col-6">
          <div className="current-weather">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={60} />
            </div>
          </div>
        </div>

        <div className="col-6" id="temperature">
          <WeatherTemperature celsius={props.data.temperature} />
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
            <div className="gengarimage">
              <img className="gengar" src="https://i.imgur.com/pfLfuBk.gif" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
