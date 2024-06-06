import { useContext, useState } from "react";
import { Left } from "./Left";
import { Modal } from "./Modal";
import { WeatherContext } from "../hooks/WeatherContext";

export function Izquierda(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [location, setLocation] = useState('');
    const { weatherData } = useContext(WeatherContext);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return(
        <>
            <Left weatherData={weatherData} toggleModal={toggleModal}/>
            <Modal isModalOpen={isModalOpen}
                toggleModal={toggleModal}
                location={location}
                setLocation={setLocation}/>
        </>
    )
}