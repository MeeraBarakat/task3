import {Route,Routes} from 'react-router-dom';
import ControlPanel from './components/ControlPanel';
import Order from './components/Order';
import Simulation from './components/Simulation';

function App() {
  return (
    <Routes>
      <Route path='/' element={<><ControlPanel/><Simulation/></>}/>
      <Route path='/order' element={<Order/>}/>
    </Routes>
  );
}

export default App;
