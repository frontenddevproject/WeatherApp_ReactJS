import React, { FC } from "react";
import { WeatherOnScreenType } from "../types/five-days-forecast-types";
import { FlexColumn, FlexRow } from "./shared/layout";

interface PropsInterface {
  dayWeather: WeatherOnScreenType;
}

export const WeatherCard: FC<PropsInterface> = ({dayWeather}) => {

  const {main, weather, wind, dt, visibility} = dayWeather;

  const currentTime = new Date(dt*1000).toLocaleString("en", { year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timeZone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'});

  const tempSign = (temp:number):string => {
    let sign = " "
    if (temp > 0) {
      sign = "+"
    } else if ( temp < 0) {
      sign = "-"
    }
    return sign
  }

  return (
    <FlexColumn justifyContent="center" alignItems="center" color="#fff">
          <h3>{currentTime}</h3>
        <FlexRow gap="30px" color="#fff" alignItems="center">
        <h1>{tempSign(main.temp)}{Math.round(main.temp)} <sup>o</sup>C</h1 >
        <div>
          <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={`${weather[0].description}`} />
        </div>
        </FlexRow>
        <FlexRow gap="30px" color="#fff" padding="15px">
          <h3><span>Feels like: {tempSign(main.feels_like)}{Math.round(main.feels_like)} <sup>o</sup>C, </span> <span>{weather[0].description}. </span> <span></span></h3>
        </FlexRow>
        <FlexRow gap="30px" color="#fff" padding="15px">
        <div>
          <p>Humidity: {main.humidity}% </p>
          <p>Pressure: {main.pressure} hPa</p>
          <p>Visibility: {visibility / 1000} km</p>
        </div>
        <div>
          <h3>Wind</h3>
          <p>Speed: {wind.speed} m/s</p>
          <p>Gust: {wind.gust} m/s</p>
          <p>Direction: {wind.deg}<sup>o</sup></p>
        </div>
        </FlexRow>    
    </FlexColumn>
  );
  }