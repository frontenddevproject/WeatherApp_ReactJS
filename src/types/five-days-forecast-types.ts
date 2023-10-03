import { CurrentWeatherInterface } from "./current-weather-types";

export interface WeatherDataInterface {
   cod: string;
   message:number;
   cnt: number;
   list: DayWeatherInterface[];
   city: CityInterface;
}

export interface DayWeatherInterface {
   dt: number;
   main: MainInformationInterface;
   weather: WeatherDescriptionInterface[];
   clouds: CloudsInterface;
   wind: WindInterface;
   visibility: number,
   pop: number,
   sys: SysInterface;
   dt_txt: string;
}
      
export interface MainInformationInterface {
   temp: number,
   feels_like: number,
   temp_min: number,
   temp_max: number,
   pressure: number,
   sea_level: number,
   grnd_level: number,
   humidity: number,
   temp_kf: number
}

export interface WeatherDescriptionInterface {
   id: number;
   main: string;
   description: string;
   icon: string;
}

export interface CloudsInterface {
   all: number
}

export interface WindInterface {
   speed: number,
   deg: number,
   gust: number
}

export interface SysInterface {
   pod: string;
}

export interface CityInterface {
   id: number;
   name: string;
   coord: CoordinatesInterface;
   country: string;
   population: number;
   timezone: number;
   sunrise: number;
   sunset: number;
}

export interface CoordinatesInterface {
   lon: number;
   lat: number;
}

export type WeatherOnScreenType = CurrentWeatherInterface & DayWeatherInterface