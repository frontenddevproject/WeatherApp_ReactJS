import { createBrowserRouter } from "react-router-dom";
import { WeatherCardList } from "./components/WeatherCardList";
import { WeatherForecastScreen } from "./components/WeatherForecastScreen";
import { CurrentWeather } from "./components/CurrentWeather";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <WeatherForecastScreen />,
      children: [
         { path: "current-weather",
            element: <CurrentWeather />,
         },
         {
            path: "five-days-forecast",
            element: <WeatherCardList />
         }
      ]
   }
])