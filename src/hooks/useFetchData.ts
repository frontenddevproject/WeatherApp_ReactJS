import { useState, useEffect, useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

export const useFetchData = <TData>(url: string, options?: RequestInit ) => {

   const { isCityEntered } = useContext(WeatherContext)!;

   const [data, setData] = useState<TData | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);

const getWeatherData = () => {
      setIsLoading(true);
         return fetch(url, options)
         .then(response => (response.ok) ? response.json() : Promise.reject("is not ok"))
         .then(responseData => {
            console.log(responseData);
            setData(responseData);
            return responseData
         })
         .catch((e) => {
            setIsLoading(false)
            setData(null)
            console.error(e);
         })
}

useEffect(() => {
      isCityEntered && getWeatherData();
    }, [url, options])
    
    return isCityEntered ? {data, isLoading} : getWeatherData;
}