import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function WeatherPage() {
  const [wheatherCondition, setWheatherCondition] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("https://mete-fake-weather.herokuapp.com/cities/" + location.state)
      .then((apiResponse) => apiResponse.json())
      .then((parsedData) => {
        setWheatherCondition(parsedData);
      });
  }, []);

  return (
    <div>
      <div className="WeatherPage">
        <div className="weather-box">
          <div className="CityName">
            <h1>{location.state}</h1>
          </div>
        </div>
        <div className="weather-box">
          <h3>
            {" "}
            {wheatherCondition.temp} / {wheatherCondition.status} /{" "}
            {wheatherCondition.humidity}
          </h3>
        </div>
        <button onClick={() => navigate("/")}>Go back</button>
      </div>
    </div>
  );
}
