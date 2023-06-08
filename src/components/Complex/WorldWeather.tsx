'use client'

import { useState, useEffect } from 'react';

import WeatherCard from '@components/Basic/WeatherCard';
import { Weather } from '@shared/types/weather';
import { requestStatus } from '@shared/types/request';
import { getErrorMessage } from '@utils/error'

export default function WorldWeather() {
  const [weatherList, setWeatherList] = useState<Weather[]>([])
  const [query, setQuery] = useState<string>('London')
  const [queryStatus, setQueryStatus] = useState<requestStatus>('idle')

  async function fetchWeather() {
    try {
      setQueryStatus('pending');
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${query}`);
      const data = await response.json();

      const weather = {
        ...data.location,
        ...data.current,
      }

      if(weather) {
        setWeatherList([weather])
      }
    } catch (err) {
      console.error('Weather fetching error occured: ', getErrorMessage(err))
    } finally {
      setQueryStatus('idle');
    }
  } 

  useEffect(() => {
    if(queryStatus === 'idle') {
      fetchWeather();
    }
  }, [])
 
  if(queryStatus === 'pending') {
    return <h2>Loading...</h2>
  }

  const weather = weatherList.map(weather => (
    <WeatherCard key={weather.tz_id} weather={weather} />
  ));

  return (
    <div>
      {weather}
    </div>
  )
}