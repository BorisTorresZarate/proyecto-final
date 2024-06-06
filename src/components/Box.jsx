import { useContext } from "react";
import { WeatherContext } from "../hooks/WeatherContext";

export function Box() {
    const { weatherData, loading, error } = useContext(WeatherContext);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const currentWeather = weatherData.list[0];

    return (
        <>
            < div className='flex flex-wrap gap-8 pt-8' >
                {/* box 1 */}
                < div className='w-full lg:w-[328px] h-[204px] bg-[#1E213A] items-center justify-center flex flex-col' >
                    <p className='text-white text-[16px] '>Wind Status</p>
                    <div className='flex flex-row'>
                        <h1 className='text-[#E7E7EB] text-[64px]'>{currentWeather.wind.speed}</h1>
                        <p className='text-[#E7E7EB] text-[32px] translate-y-6'>mph</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <figure className='w-[29.49px] h-[29.49px] bg-[#a8a8a867] rounded-full flex items-center justify-center'>
                            <img src="vector.png" alt="" style={{ transform: `rotate(${currentWeather.wind.deg}deg)` }} />
                        </figure>
                        <p className='text-white text-[14px]'>WSW</p>
                    </div>
                </div>
                {/* box 2 */}
                <div className='w-full lg:w-[328px] h-[204px] bg-[#1E213A] items-center justify-center flex flex-col'>
                    <p className='text-white text-[16px] '>Humidity</p>
                    <div className='flex flex-row'>
                        <h1 className='text-[#E7E7EB] text-[64px] font-serif'>{currentWeather.main.humidity}</h1>
                        <p className='text-[#E7E7EB] text-[32px] translate-y-9'>%</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex w-[229px] h-[20px] justify-between '>
                            <p className='text-[#A09FB1] text-[12px]'>0</p>
                            <p className='text-[#A09FB1] text-[12px]'>50</p>
                            <p className='text-[#A09FB1] text-[12px]'>100</p>
                        </div>
                        <div className='w-[229px] h-[10px] border'>
                            <div className='bg-yellow-300 h-full' style={{ width: `${currentWeather.main.humidity}%` }}></div>
                        </div>
                        <p className='text-[#A09FB1] text-right'>%</p>
                    </div>
                </div>
            </div >
            <div className='flex flex-wrap gap-8 pt-5'>
                {/* box 3 */}
                <div className='w-full lg:w-[328px] h-[160px] bg-[#1E213A] flex flex-col justify-center items-center gap-3'>
                    <p className='text-[#E7E7EB] text-[16px] '>Visibility</p>
                    <div className='flex gap-2'>
                        <p className='text-[#E7E7EB] text-[50px] font-serif '>{(currentWeather.visibility / 1609.344).toFixed(1)}</p>
                        <p className='text-[#E7E7EB] text-[30px] font-serif translate-y-5'>miles</p>
                    </div>
                </div>
                {/* box4 */}
                <div className='w-full lg:w-[328px] h-[160px] bg-[#1E213A] flex flex-col justify-center items-center gap-3'>
                    <p className='text-[#E7E7EB] text-[16px] '>Air Pressure</p>
                    <div className='flex gap-2'>
                        <p className='text-[#E7E7EB] text-[50px] font-serif '>{currentWeather.main.pressure}</p>
                        <p className='text-[#E7E7EB] text-[30px] font-serif translate-y-5'>mb</p>
                    </div>
                </div>
            </div>
        </>
    )
}