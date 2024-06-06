
export function Rigth(){
    return(
        < div className='bg-[#100E1D] w-full lg:w-3/4 h-full lg:h-screen overflow-y-auto py-5 px-20 lg:px-20' >

          <div className='flex items-end justify-end pr-11 gap-4'>
            <button className='text-black text-[18px] w-[40px] h-[40px] rounded-full bg-[#E7E7EB] border-none hover:bg-[#dadae6]'>°C</button>
            <button className='text-white text-[18px] w-[40px] h-[40px] rounded-full bg-[#585676] border-none hover:bg-[#4d4c5f]'>°F</button>
          </div>

          <div className='flex flex-wrap gap-5 pt-8 justify-center lg:justify-start '>
            <div className='bg-[#1E213A] w-[120px] h-[177px] flex flex-col items-center justify-between py-3'>
              <p className='text-[#E7E7EB] text-center text-[16px]'>Tomorrow</p>
              <figure className='w-[56.44px] h-[62px] flex items-center justify-center'>
                <img src="Shower.png" alt="" className='object-contain' />
              </figure>
              <div className='flex gap-6'>
                <p className='text-[#E7E7EB] font-serif'>16°C</p>
                <p className='text-[#A09FB1] font-serif'>11°C</p>
              </div>
            </div>
            <div className='bg-[#1E213A] w-[120px] h-[177px] flex flex-col items-center justify-between py-3'>
              <p className='text-[#E7E7EB] text-center text-[16px]'>Sun, 7 Jun</p>
              <figure className='w-[56.44px] h-[62px] flex items-center justify-center'>
                <img src="Thunderstorm.png" alt="" className='object-contain' />
              </figure>
              <div className='flex gap-6'>
                <p className='text-[#E7E7EB] font-serif'>13°C</p>
                <p className='text-[#A09FB1] font-serif'>16°C</p>
              </div>
            </div>
            <div className='bg-[#1E213A] w-[120px] h-[177px] flex flex-col items-center justify-between py-3'>
              <p className='text-[#E7E7EB] text-center text-[16px]'>Mon, 8 Jun</p>
              <figure className='w-[56.44px] h-[62px] flex items-center justify-center'>
                <img src="Sleet.png" alt="" className='object-contain' />
              </figure>
              <div className='flex gap-6'>
                <p className='text-[#E7E7EB] font-serif'>11°C</p>
                <p className='text-[#A09FB1] font-serif'>17°C</p>
              </div>
            </div>
            <div className='bg-[#1E213A] w-[120px] h-[177px] flex flex-col items-center justify-between py-3'>
              <p className='text-[#E7E7EB] text-center text-[16px]'>Tue, 9 Jun</p>
              <figure className='w-[56.44px] h-[62px] flex items-center justify-center'>
                <img src="LightCloud.png" alt="" className='object-contain' />
              </figure>
              <div className='flex gap-6'>
                <p className='text-[#E7E7EB] font-serif'>18°C</p>
                <p className='text-[#A09FB1] font-serif'>12°C</p>
              </div>
            </div>
            <div className='bg-[#1E213A] w-[120px] h-[177px] flex flex-col items-center justify-between py-3'>
              <p className='text-[#E7E7EB] text-center text-[16px]'>Wed, 10 Jun</p>
              <figure className='w-[56.44px] h-[62px] flex items-center justify-center'>
                <img src="Hail.png" alt="" className='object-contain' />
              </figure>
              <div className='flex gap-6'>
                <p className='text-[#E7E7EB] font-serif'>19°C</p>
                <p className='text-[#A09FB1] font-serif'>15°C</p>
              </div>
            </div>
          </div>

          <p className='text-[#E7E7EB] pt-8 text-[24px]'>Today’s Highlights</p>
          {/* inicio de cajas */}
          < div className='flex flex-wrap gap-8 pt-8' >
            {/* box 1 */}
            < div className='w-full lg:w-[328px] h-[204px] bg-[#1E213A] items-center justify-center flex flex-col' >
              <p className='text-white text-[16px] '>Wind Status</p>
              <div className='flex flex-row'>
                <h1 className='text-[#E7E7EB] text-[64px]'>7</h1>
                <p className='text-[#E7E7EB] text-[32px] translate-y-6'>mph</p>
              </div>
              <div className='flex flex-row gap-2'>
                <figure className='w-[29.49px] h-[29.49px] bg-[#a8a8a867] rounded-full flex items-center justify-center'>
                  <img src="vector.png" alt="" style={{ transform: `rotate(150deg)` }} />
                </figure>
                <p className='text-white text-[14px]'>WSW</p>
              </div>
            </div>
            {/* box 2 */}
            <div className='w-full lg:w-[328px] h-[204px] bg-[#1E213A] items-center justify-center flex flex-col'>
              <p className='text-white text-[16px] '>Humidity</p>
              <div className='flex flex-row'>
                <h1 className='text-[#E7E7EB] text-[64px] font-serif'>84</h1>
                <p className='text-[#E7E7EB] text-[32px] translate-y-9'>%</p>
              </div>
              <div className='flex flex-col'>
                <div className='flex w-[229px] h-[20px] justify-between '>
                  <p className='text-[#A09FB1] text-[12px]'>0</p>
                  <p className='text-[#A09FB1] text-[12px]'>50</p>
                  <p className='text-[#A09FB1] text-[12px]'>100</p>
                </div>
                <div className='w-[229px] h-[10px] border'>
                  <div className='bg-yellow-300 h-full' style={{ width: `80%` }}></div>
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
                <p className='text-[#E7E7EB] text-[50px] font-serif '>6,4</p>
                <p className='text-[#E7E7EB] text-[30px] font-serif translate-y-5'>miles</p>
              </div>
            </div>
            {/* box4 */}
            <div className='w-full lg:w-[328px] h-[160px] bg-[#1E213A] flex flex-col justify-center items-center gap-3'>
              <p className='text-[#E7E7EB] text-[16px] '>Air Pressure</p>
              <div className='flex gap-2'>
                <p className='text-[#E7E7EB] text-[50px] font-serif '>998</p>
                <p className='text-[#E7E7EB] text-[30px] font-serif translate-y-5'>mb</p>
              </div>
            </div>
          </div>
          <p className='text-[14px] text-center font-[Montserrat] text-[#A09FB1] pt-3'>created by BorisTorres - devChallenges.io</p>
        </div >
    )
}