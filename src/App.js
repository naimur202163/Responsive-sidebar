import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar';
import Events from './Components/Items/Events/Events';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/event' element={<Home />}></Route>

          <Route path="/event/newevents" element={<Home>
            <Events />
          </Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
