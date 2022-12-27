import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
export default function Weather() {
  const [city, setCity] = useState(" ");

  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-5">
          <h1>{weather.name}</h1>
        </div>
        <div className="col-7">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Tipe a city"
                  className="form-control"
                  autoComplete="off"
                  onChange={updateCity}
                />
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <h2>
        <div> </div>
        <div> </div>
      </h2>
      <div className="row">
        <div className="col-8">
          <div className="main d-flex">
            <img
              src={weather.icon}
              alt={weather.description}
              className="illustr"
            />

            <strong>{weather.temperature}</strong>
            <span className="units">
              <a href="/">℃</a> | <a href="/">℉</a>
            </span>
            <span className="description">{weather.description}</span>
          </div>
        </div>
        <div className="col-4">
          <ul className="list-options">
            <li className="options">Humidity: {weather.humidity} %</li>

            <li className="options">Pressure: {weather.pressure} mb</li>

            <li className="options">Wind: {weather.wind} km/h</li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <a
          href="https://github.com/Anastakas/weather1-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourse code
        </a>{" "}
        by <a href="mailto:kasilova@gmail.com">Anastasiya kasilova</a>
      </div>
    </div>
  );
}
