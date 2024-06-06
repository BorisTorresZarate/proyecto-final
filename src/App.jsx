
import { Left } from './components/Left';
import { Rigth } from './components/Rigth';
import { Modal } from './components/Modal';
import { WeatherContext } from './hooks/WeatherContent';
import { useContext, useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState('');
  const { weatherData } = useContext(WeatherContext);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (

    <WeatherProvider>
      <div className="w-full min-h-screen flex flex-col lg:flex-row">
        <Left weatherData={weatherData} toggleModal={toggleModal} />
        <Modal isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          location={location}
          setLocation={setLocation} />
        <Rigth />
      </div >
    </ WeatherProvider>

  )
}

export default App;
