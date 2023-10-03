import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { WeatherCard } from "./WeatherCard";
import {
  DayWeatherInterface,
  WeatherOnScreenType,
} from "../types/five-days-forecast-types";
import { FlexRow } from "./shared/layout";

export const WeatherCardList = () => {
  const { weatherData, setIsForecastPageLoading, setIsCurrentPageLoading } =
    useContext(WeatherContext)!;

  setIsCurrentPageLoading(false);
  setIsForecastPageLoading(true);
  
  return (
    <div>
      <FlexRow justifyContent="center" color="#fff" margin="15px">
        {weatherData && (
          <h1>5 day / 3 hour weather forecast in {weatherData.city.name}</h1>
        )}
      </FlexRow>
      <FlexRow gap="10px" flexWrap="wrap" justifyContent="center">
        {weatherData &&
          weatherData.list.map((dayWeather: DayWeatherInterface, i) => (
            <div className="weather-card" key={`${dayWeather.dt}-${i}`}>
              <div>
                <WeatherCard dayWeather={dayWeather as WeatherOnScreenType} />
              </div>
            </div>
          ))}
      </FlexRow>
    </div>
  );
};
