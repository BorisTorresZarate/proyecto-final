
export function Left({ setOpenModal, data, setGeolocation }) {
  // para poder hallar la latitud y la longitude
  function success(position) {
    setGeolocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      key: 'bd8eea15f59ddfc98822546652bdf328',
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
  return (
    <>
      <div className='w-full lg:w-[459px] h-full lg:h-screen bg-[#1E213A] flex flex-col'>
        <div className='h-[10%] w-full flex justify-between relative p-4'>
          <button className='bg-gray-500 w-40 h-10 border' onClick={() => setOpenModal(true)}>Search for places</button>
          <button
            onClick={() => navigator.geolocation.watchPosition(success, error, options)}
            className='bg-objetivo bg-gray-500 bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 object-cover'>
          </button>
        </div>
        <div className='w-full h-2/5 relative'>
          <figure className='w-full h-full opacity-45'>
            <img src="Cloud-background.png" alt="" className='object-cover w-full h-full' />
          </figure>
          <figure className='w-28 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <img src="Clear.png" alt="" />
          </figure>
        </div>
        {data && (
          <div className='h-1/2 w-full'>
            <div className='flex items-center justify-center m-0 p-0'>
              <p className='text-center text-white text-6xl lg:text-[100px] font-serif'></p>
              <span className='text-center text-[#88869D] text-2xl lg:text-[48px] font-[Raleway] translate-y-2 lg:translate-y-5'>°C</span>
            </div>
            <p className='text-center text-[#88869D] text-xl lg:text-3xl pt-12 font-[Raleway]'>aaa</p>
            <p className='text-center text-[#88869D] text-sm lg:text-[18px] pt-12 font-light'>Today . </p>
            <div className='flex items-center justify-center pt-2'>
              <figure>
                <img src="ubi.png" alt="" className='bg-center w-4 h-4 lg:w-auto lg:h-auto' />
              </figure>
              <p className='text-[14px] lg:text-[18px] text-[#88869D] font-[raleway] ml-2'>{data.name}</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}