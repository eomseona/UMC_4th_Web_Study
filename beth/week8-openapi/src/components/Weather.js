import React, { useEffect, useState } from "react";
import WeatherBtn from "./WeatherBtn";
import { Box, Grid } from "@material-ui/core";
import styled from "styled-components";

const Weather = () => {
  const [city, setCity] = useState("Seoul");
  const [weather, setWeather] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = "https://api.openweathermap.org/data/2.5/weather";
  const cities = [
    "paris",
    "New York",
    "Tokyo",
    "Seoul",
    "London",
    "Singapore",
    "Hong Kong",
    "Chicago",
    "Toronto",
    "Mexico",
    "Thailand",
    "Miami",
  ];

  const getWeather = async () => {
    let response = await fetch(`${url}?q=${city}&appid=${apiKey}&units=metric`);
    let data = await response.json();
    setWeather(data);
    console.log(data);
  };

  const handleCityChange = (city) => {
    setCity(city);
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  return (
    <Layout>
      <h1>Get the Weather Info</h1>
      <Box
        style={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "30px auto",
          background: "white",
          borderRadius: "20px",
          paddingTop: "10px",
        }}
      >
        <div>{weather && weather.name}</div>
        <h2>
          {weather &&
            `${
              weather.main.temp > 0
                ? Math.floor(weather.main.temp)
                : weather.main.temp
            }`}
          °C
        </h2>
        <h3>{weather && weather.weather[0].description}</h3>
      </Box>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {cities &&
          cities.map((city, index) => (
            <WeatherBtn
              city={city}
              key={index}
              onClick={() => handleCityChange(city)}
            />
          ))}
      </div>
    </Layout>
  );
};

export default Weather;

const Layout = styled.div`
  position: fixed;
  top: 100px;
  left: 100px;
  right: 100px;
  height: 500px;
  background-image: url("https://img.freepik.com/premium-photo/sky-clouds_1417-2198.jpg?size=626&ext=jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
