import { useMemo, useState } from "react";
import { DayWeatherInterface } from "../types/five-days-forecast-types";

export interface TemperatureInterface {
   minTemperature: number, 
   maxTemperature: number
}

export interface UseWeekDaysInterface {
   weekDays: string[];
   temperature: TemperatureInterface;
}

export const useWeekDays = (data: DayWeatherInterface[] | null) => {

   const [weekDays, setWeekDays] = useState<string[]>([]);

   const getWeekDay = useMemo(() => {
      if (data) {
        for (let i = 0; i < data.length; i++) {
          let ms = data[i].dt * 1000;
          weekDays[i] = new Date(ms).toLocaleString("en", {
            weekday: "short",
            timeZone: "UTC",
          });
        }
        setWeekDays(weekDays);
      }
    }, [data, weekDays]);

return weekDays
}
