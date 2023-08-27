import logo from './logo.svg';
import './App.css';
import SumaUno from './Components/Cpm1/Cmp1';
import Anidador from './Components/Cmp2/Cmp2';
import FechaYHoraActual from './Components/Cmp3/Cmp3';

function App() {
  return (
    <div className="App">
     <p>hola profe, aca va la tarea</p>
     <SumaUno/>
     <Anidador/>
     <FechaYHoraActual/>
    </div>
  );
}

export default App;
