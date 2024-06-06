import { useEffect, useState } from "react";
import { GeoLoc } from "./GeoLoc";

export function Left({ weatherData, toggleModal }) {
  const [currentTemperature, setCurrentTemperature] = useState('');
  const [currentWeatherDescription, setCurrentWeatherDescription] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateWeather = () => {
      if (!weatherData || !weatherData.list || weatherData.list.length === 0) {
        return;
      }

      const currentWeather = weatherData.list[0];

      if (!currentWeather.main || !currentWeather.weather || currentWeather.weather.length === 0) {
        return;
      }

      const temperature = currentWeather.main.temp;
      const weatherDescription = currentWeather.weather[0].description;
      const temperatureInCelsius = kelvinToCelsius(temperature);
      setCurrentTemperature(temperatureInCelsius.toFixed(2));
      setCurrentWeatherDescription(weatherDescription);
      setCurrentDate(getCurrentDate());
    };

    const kelvinToCelsius = (temp) => {
      return temp - 273.15;
    };

    const getCurrentDate = () => {
      const date = new Date();
      const options = { weekday: 'long', month: 'short', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    };

    updateWeather();

    const interval = setInterval(() => {
      updateWeather();
    }, 3 * 60 * 60 * 1000); 

    return () => clearInterval(interval);
  }, [weatherData]);
  return (
    <>
      <div className='w-full lg:w-[459px] h-full lg:h-screen bg-[#1E213A] flex flex-col'>
        <div className='h-[10%] w-full flex justify-between relative p-4'>
          <button className='bg-gray-500 w-40 h-10 border' onClick={toggleModal}>Search for places</button>
          <GeoLoc />
        </div>

        <div className='w-full h-2/5 relative'>
          <figure className='w-full h-full opacity-45'>
            <img src="Cloud-background.png" alt="" className='object-cover w-full h-full' />
          </figure>
          <figure className='w-28 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <img src={`/public/${weatherData && weatherData.list && weatherData.list.length > 0 && weatherData.list[0].weather[0].icon}.png`} alt="" />
          </figure>
        </div>

        <div className='h-1/2 w-full'>
          <div className='flex items-center justify-center m-0 p-0'>
            <p className='text-center text-white text-6xl lg:text-[100px] font-serif'>{currentTemperature}</p>
            <span className='text-center text-[#88869D] text-2xl lg:text-[48px] font-[Raleway] translate-y-2 lg:translate-y-5'>°C</span>
          </div>
          <p className='text-center text-[#88869D] text-xl lg:text-3xl pt-12 font-[Raleway]'>{currentWeatherDescription}</p>
          <p className='text-center text-[#88869D] text-sm lg:text-[18px] pt-12 font-light'>{currentDate} </p>
          <div className='flex items-center justify-center pt-2'>
            <figure>
              <img src="ubi.png" alt="" className='bg-center w-4 h-4 lg:w-auto lg:h-auto' />
            </figure>
            <p className='text-[14px] lg:text-[18px] text-[#88869D] font-[raleway] ml-2'>{weatherData && weatherData.city && weatherData.city.name || 'Select a location'}</p>
          </div>
        </div>
      </div>
    </>
  )
}