import {Route,Routes} from 'react-router-dom';
import ControlPanel from './components/ControlPanel';
import Order from './components/Order';
import Simulation from './components/Simulation';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <Routes>
      <Route path='/' element={<><ControlPanel/><Simulation/></>}/>
      <Route path='/order' element={<Order/>}/>
    </Routes>
    </DndProvider>
  );
}

export default App;
