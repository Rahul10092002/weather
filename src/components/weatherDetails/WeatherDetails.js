import React from "react";
import "./weatherDetails.css";
const WeatherDetails = ({ data }) => {
  if (!data || !data.location) {
    return <div>Loading data</div>;
  }

  return (
    <div className="weather">
      <div className="top">
        <h2 className="city">
          Weather Details for {data?.location?.name}, {data.location.country}
        </h2>
        <div>
          <img
            className="logo"
            src={`https:${data.current.condition.icon}`}
            alt="weather icon"
          />
        </div>
      </div>
      <div className="weatherdetails">
        <div className="bottom">
          <p>
            Temperature: {data.current.temp_c}°C ({data.current.temp_f}°F)
          </p>
          <p>Condition: {data.current.condition.text}</p>
          <p>Wind: {data.current.wind_mph} mph</p>
          <p>Humidity: {data.current.humidity}%</p>
          <p>Pressure: {data.current.pressure_in} hPa</p>
          <p>Precipitation: {data.current.precip_in} in</p>
          <p>
            Feels Like: {data.current.feelslike_c}°C ({data.current.feelslike_f}
            °F)
          </p>
        </div>
        <div className="air-quality">
          <h3>Air Quality</h3>
          <p>CO: {data.current.air_quality.co}</p>
          <p>NO2: {data.current.air_quality.no2}</p>
          <p>O3: {data.current.air_quality.o3}</p>
          <p>SO2: {data.current.air_quality.so2}</p>
          <p>PM2.5: {data.current.air_quality.pm2_5}</p>
          <p>PM10: {data.current.air_quality.pm10}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
