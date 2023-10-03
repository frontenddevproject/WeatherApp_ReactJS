import React from 'react';
import { WeatherForecastScreen } from './components/WeatherForecastScreen';

import './App.css';
import { WeatherContextProvider } from './contexts/WeatherContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';


function App() {
  return (
    <WeatherContextProvider>
        <RouterProvider router={router} />
    </WeatherContextProvider>
  );
}

export default App;
