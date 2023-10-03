import React, { useContext } from 'react'
import { Search } from './Search'
import { Link, Outlet } from 'react-router-dom'
import { WeatherContext } from '../contexts/WeatherContext'
import { FlexColumn, FlexRow, Wrapper } from './shared/layout'


export const WeatherForecastScreen = () => {
  const { weatherData, currentWeatherData, isForecastPageLoading, isCurrentPageLoading } = useContext(WeatherContext)!;

  return (
   <Wrapper>
      <FlexColumn alignItems="center" gap="20px">
        <h1 className="title-app">Weather App</h1>
        <Search />
        <FlexRow gap="30px" margin="20px" color="#fff">
          {(currentWeatherData && !isCurrentPageLoading) && <Link to={"current-weather"}><h3 className="weather-option">Current weather </h3></Link>}
          {(weatherData && !isForecastPageLoading ) && <Link to={"five-days-forecast"}><h3 className="weather-option">5 days / 3 hour weather forecast </h3></Link>}
        </FlexRow>
        <Outlet />
      </FlexColumn>
   </Wrapper>
  )
}
