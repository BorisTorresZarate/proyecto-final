
import { WeatherProvider } from './hooks/WeatherContext';
import { Rigth } from './components/Rigth';
import { Izquierda } from './components/Izquierda';


function App() {
  return (
    <WeatherProvider>
      <div className="w-full min-h-screen flex flex-col lg:flex-row">
        <Izquierda/>
        <Rigth/>
      </div>
    </WeatherProvider>
  );
}

export default App;
