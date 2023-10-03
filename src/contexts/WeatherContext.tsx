import React, { Dispatch, FC, PropsWithChildren, createContext, useEffect, useState } from 'react'
import { DayWeatherInterface, WeatherDataInterface } from '../types/five-days-forecast-types';
import { CurrentWeatherInterface } from '../types/current-weather-types';


interface WeatherContextInterface {
  isCityEntered: boolean;
  setIsCityEntered: Dispatch<boolean>;
  weatherData: WeatherDataInterface | null;
  setWeatherData: Dispatch<WeatherDataInterface>
  currentWeatherData: CurrentWeatherInterface | null;
  setCurrentWeatherData: Dispatch<CurrentWeatherInterface>;
  location: string;
  setLocation: Dispatch<string>;
  fiveDaysWeatherScreen: DayWeatherInterface[];
  setFiveDaysWeatherScreen: Dispatch<DayWeatherInterface[]>;
  weatherToRender: WeatherDataInterface;
  setWeatherToRender: Dispatch<WeatherDataInterface>;
  isCurrentPageLoading: boolean;
  setIsCurrentPageLoading: Dispatch<boolean>;
  isForecastPageLoading: boolean;
  setIsForecastPageLoading: Dispatch<boolean>
}

export const WeatherContext = createContext<WeatherContextInterface | null>(null);

export const WeatherContextProvider: FC<PropsWithChildren> = ({ children }) => {

  const [isCityEntered, setIsCityEntered] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherDataInterface | null>(null);
  const [weatherToRender, setWeatherToRender] = useState<WeatherDataInterface>({} as WeatherDataInterface)
  const [currentWeatherData, setCurrentWeatherData] = useState<CurrentWeatherInterface | null>(null);
  const [location, setLocation] = useState<string>("");
  const [isCurrentPageLoading, setIsCurrentPageLoading] = useState<boolean>(false)
  const [isForecastPageLoading, setIsForecastPageLoading] = useState<boolean>(false)
  const [fiveDaysWeatherScreen, setFiveDaysWeatherScreen] = useState<DayWeatherInterface[]>([]);

  useEffect(() => {
    weatherData && setFiveDaysWeatherScreen ([...weatherData.list].filter((day) => day.dt_txt.includes("15:00:00")));
    weatherData && setWeatherToRender(weatherData);
  }, [weatherData]);
  
  return (
    <WeatherContext.Provider value={{
      isCityEntered,
      setIsCityEntered,
      weatherData,
      setWeatherData,
      currentWeatherData,
      setCurrentWeatherData,
      location,
      setLocation,
      fiveDaysWeatherScreen,
      setFiveDaysWeatherScreen,
      weatherToRender,
      setWeatherToRender,
      isCurrentPageLoading,
      setIsCurrentPageLoading,
      isForecastPageLoading,
      setIsForecastPageLoading,
    }}>
      {children}
    </WeatherContext.Provider>
  )
}
