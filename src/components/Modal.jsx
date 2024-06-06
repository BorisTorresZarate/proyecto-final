import React, { useContext } from 'react';
import { WeatherContext } from '../hooks/WeatherContent';

export function Modal({ isModalOpen, toggleModal, location, setLocation }) {
  const { fetchWeatherByCity } = useContext(WeatherContext); 

    const handleSearchButtonClick = () => {
        fetchWeatherByCity(location);
        toggleModal();
    };

    const handleLocationButtonClick = (city) => {
        fetchWeatherByCity(city);
        toggleModal();
    };

    const handleLocationInputChange = (e) => {
        setLocation(e.target.value);
    };
  return (
    <>
        <div className={`overflow-y-auto overflow-x-clip  w-full lg:w-[459px] h-full lg:h-screen bg-[#1E213A] flex flex-col absolute top-0 left-0 ${isModalOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <span onClick={toggleModal} className='text-white text-[32px] absolute top-4 right-8 cursor-pointer'>X</span>
          <div className='relative top-20 left-14'>
            <div className='absolute'>
              <img src="buscar.png" alt="" className='absolute left-4 top-1/2 transform -translate-y-1/2 h-[17.05px] w-[17.05px]' />
              <input value={location} onChange={handleLocationInputChange} type="text" className='text-white border border-[#E7E7EB] bg-transparent w-[268px] h-[48px] py-2 px-10' placeholder='search location' />
            </div>
            <button onClick={handleSearchButtonClick} className='absolute bg-[#3C47E9] text-[#E7E7EB] w-[86px] h-[48px] right-[80px]'>Search</button>
          </div>
          <ul className='absolute top-48 left-14'>
            <li onClick={() => handleLocationButtonClick('London')} className='relative text-white w-[367px] h-[64px] pl-5 flex items-center my-5 hover:border hover:border-gray-300 hover:opacity-100'>
              London
              <img src="derecha.png" alt="" className='absolute right-3 h-8 transition-opacity opacity-0 hover:opacity-100' />
            </li>
            <li onClick={() => handleLocationButtonClick('Barcelona')} className='relative text-white w-[367px] h-[64px] pl-5 flex items-center my-5 hover:border hover:border-gray-300 hover:opacity-100'>
              Barcelona
              <img src="derecha.png" alt="" className='absolute right-3 h-8 transition-opacity opacity-0 hover:opacity-100' />
            </li>
            <li onClick={() => handleLocationButtonClick('Long Beach')} className='relative text-white w-[367px] h-[64px] pl-5 flex items-center my-5 hover:border hover:border-gray-300 hover:opacity-100'>
              Long Beach
              <img src="derecha.png" alt="" className='absolute right-3 h-8 transition-opacity opacity-0 hover:opacity-100' />
            </li>
          </ul>
        </div>
    </>
  )
}