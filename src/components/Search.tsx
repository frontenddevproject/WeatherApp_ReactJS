import React, { useCallback, useContext, useState } from 'react'
import { useFetchData } from '../hooks/useFetchData';
import { cnt, key, options } from '../api.config';
import { WeatherDataInterface } from '../types/five-days-forecast-types';
import { WeatherContext } from '../contexts/WeatherContext';
import { CurrentWeatherInterface } from '../types/current-weather-types';
import { Link } from 'react-router-dom';
import { FlexRow } from './shared/layout';
import { SearchInput, SearchButton } from './shared/html-elements';

export const Search = () => {

   const { setIsCityEntered } = useContext(WeatherContext)!;
   const { setWeatherData } = useContext(WeatherContext)!;
   const { setLocation } = useContext(WeatherContext)!;
   const { setCurrentWeatherData } = useContext(WeatherContext)!;


   const [inputValue, setInputValue] = useState("");

   
   const getWeatherData = useFetchData<WeatherDataInterface>(
      `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${key}&units=metric&cnt=${cnt}`,
      options) as () => Promise<WeatherDataInterface>;

   const getCurrentWeatherData = useFetchData<CurrentWeatherInterface>(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}&units=metric`,
      options) as () => Promise<CurrentWeatherInterface>;

   const onChange = useCallback((event: { target: { value: string }}) => {
      setInputValue(event.target.value);
   }, [setInputValue]); 

   const onClear = useCallback(() => {
      setInputValue("");
      setIsCityEntered(false);
   }, [ setInputValue, setIsCityEntered ]);
  


   const citySearch = () => {
      if (inputValue) {
         setIsCityEntered(true);
         getCurrentWeatherData().then((data) => {
            setCurrentWeatherData(data);
            setLocation(data.name);
         });
         getWeatherData()
         .then((data) => setWeatherData(data))
        
         setIsCityEntered(false);
         onClear();
      }
   }

  return (
      <FlexRow gap="10px" justifyContent="center">
         <SearchInput type="text" placeholder="Search city" onChange={onChange} value={inputValue}/>
         <Link to={"current-weather"}><SearchButton className="search-button" onClick={citySearch}>Search</SearchButton></Link>
         <SearchButton className="search-button" onClick={onClear}>Clear</SearchButton>
      </FlexRow>
  )
}
