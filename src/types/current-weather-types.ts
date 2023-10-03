import { CloudsInterface, CoordinatesInterface, MainInformationInterface, WeatherDescriptionInterface, WindInterface } from "./five-days-forecast-types";

export interface CurrentWeatherInterface {
   coord: CoordinatesInterface;
   weather: WeatherDescriptionInterface[];
   base: string;
   main: MainInformationInterface;
   visibility: number;
   wind: WindInterface;
   rain: RainInterface;
   clouds: CloudsInterface;
   dt: number;
   sys: CurrentSysInterface;
   timezone: number,
   id: number,
   name: string,
   cod: number
}

export interface RainInterface {
   "1h":number;
}

export interface CurrentSysInterface {
   type: number;
   id: number;
   country: string;
   sunrise: number;
   sunset: number;
}
       