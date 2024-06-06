import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../hooks/WeatherContext";

export function GeoLoc() {
  const { setLocation } = useContext(WeatherContext);
  const [geolocation, setGeolocation] = useState({});

  function success(position) {
    setGeolocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  function error() {
    alert("Sorry, no position available.");
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []); // Solo se ejecutará una vez al cargar el componente

  useEffect(() => {
    if ("latitude" in geolocation) {
      setLocation({
        lat: geolocation.latitude,
        lon: geolocation.longitude,
      });
    }
  }, [geolocation, setLocation]);
  return (
    <button

      className='bg-objetivo bg-gray-500 bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 object-cover'>
    </button>
  )
}