import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { WeatherCard } from "./WeatherCard";
import {
  DayWeatherInterface,
  WeatherOnScreenType,
} from "../types/five-days-forecast-types";
import { FlexColumn, FlexRow, GridColumns } from "./shared/layout";
import { useWeekDays } from "../hooks/useWeekDay";

export interface TemperatureInterface {
  minTemperature: number;
  maxTemperature: number;
}

export const CurrentWeather = () => {
  const {
    currentWeatherData,
    location,
    weatherData,
    setIsForecastPageLoading,
    setIsCurrentPageLoading,
  } = useContext(WeatherContext)!;
  const { fiveDaysWeatherScreen } = useContext(WeatherContext)!;

  const weekDays = useWeekDays(fiveDaysWeatherScreen);

  setIsCurrentPageLoading(true);
  setIsForecastPageLoading(false);

  // ------------------Code for min and max temperatures on the Current page------------------
  // const { weatherToRender} = useContext(WeatherContext)!;
  // const allDays = useWeekDays(weatherToRender.list);
  // const getExtremumDayTemperature = useMemo(() => {
  //   if (weatherToRender) {
  //     for (let i = 0; i < weatherToRender!.list.length; i++) {
  //       new Date(weatherToRender.list[i].dt * 1000)
  //         .toLocaleString("en", { weekday: "short", timeZone: "UTC" })
  //         .includes(allDays[i])
  //         ? dayForecast.push(weatherToRender.list[i])
  //         : null;
  //     }
  //     setDayForecast(dayForecast);
  //     console.log(dayForecast);
  //   }
  // }, [weatherToRender]);

  // --------------------------------------------------------------------------------------------

  return (
    <div>
      <FlexRow
        color="#fff"
        alignItems="center"
        justifyContent="center"
        margin="0 0 20px 0"
      >
        <h1>Weather in {location}</h1>
      </FlexRow>
      <GridColumns
        gridTemplateColumns="1fr 1fr"
        width="100%"
        textAlign="center"
        color="#fff"
      >
        {currentWeatherData && (
          <div>
            <WeatherCard
              dayWeather={currentWeatherData as WeatherOnScreenType}
            />
          </div>
        )}
        {weatherData && (
          <FlexColumn
            justifyContent="center"
            gap="15px"
            color="#fff"
            alignItems="center"
          >
            <h2>5 days weather forecast</h2>

            {weatherData &&
              fiveDaysWeatherScreen.map(
                (dayWeather: DayWeatherInterface, i) => (
                  <div key={`${dayWeather.dt}-${i}`}>
                    <FlexRow
                      gap="10px"
                      color="#fff"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      {weekDays[i]}{" "}
                      <img
                        src={`https://openweathermap.org/img/wn/${fiveDaysWeatherScreen[i].weather[0].icon}.png`}
                        alt={`${fiveDaysWeatherScreen[i].weather[0].description}`}
                      />{" "}
                      <span>
                        maxTemp / minTemp
                        {/* {temperature.maxTemperature} <sup>o</sup>C /{" "}
                      {temperature.minTemperature} <sup>o</sup>C */}
                      </span>
                    </FlexRow>
                  </div>
                )
              )}
          </FlexColumn>
        )}
      </GridColumns>
    </div>
  );
};
