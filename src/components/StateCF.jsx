import { useContext, useState } from "react";
import { WeatherContext } from "../hooks/WeatherContext";

export function StateCF() {
    const { weatherData, loading, error } = useContext(WeatherContext);
    const [unit, setUnit] = useState('C'); 

    if (loading) return <div className="text-white">Loading...</div>;
    if (error) return <div className="text-white">Error: {error}</div>;

    const dailyForecasts = weatherData.list.filter(forecast => forecast.dt_txt.includes("12:00:00"));

    const convertTemperature = (temp) => {
        return unit === 'C' ? Math.round(temp - 273.15) : Math.round((temp - 273.15) * 9 / 5 + 32);
    };

    return (
        <>
            <div className='flex items-end justify-end pr-11 gap-4'>
                <button className={`text-black text-[18px] w-[40px] h-[40px] rounded-full bg-[#E7E7EB] border-none hover:bg-[#dadae6] ${unit === 'C' ? 'bg-blue-500' : 'bg-white'}`} onClick={() => setUnit('C')}>°C</button>
                <button className={`text-white text-[18px] w-[40px] h-[40px] rounded-full bg-[#585676] border-none hover:bg-[#4d4c5f] ${unit === 'F' ? 'bg-blue-500' : 'bg-gray-700'}`} onClick={() => setUnit('F')} >°F</button>
            </div>

            <div className='flex flex-wrap gap-5 pt-8 justify-center lg:justify-start '>
                {
                    dailyForecasts.slice(0, 5).map((forecast, index) => (
                        <div key={index} className='bg-[#1E213A] w-[120px] h-[177px] flex flex-col items-center justify-between py-3'>
                            <p className='text-[#E7E7EB] text-center text-[16px]'>{new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                            <figure className='w-[56.44px] h-[62px] flex items-center justify-center'>
                                <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" className='object-contain' />
                            </figure>
                            <div className='flex gap-6'>
                                <p className='text-[#E7E7EB] font-serif'>{convertTemperature(forecast.main.temp_max)}°{unit}</p>
                                <p className='text-[#A09FB1] font-serif'>{convertTemperature(forecast.main.temp_min)}°{unit}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}