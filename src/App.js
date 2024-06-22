import './App.css';
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap';
import {BrowserRouter , Route ,Routes,  Link , Switch } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Home from './screens/Home';




function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>

      <Routes>

      <Route path ="/home" element={<Homescreen/>} />
      <Route path ="/" element={<Home/>} />
      <Route path="/cart" element={<Cartscreen/>}/>
      <Route path="/register" element={<Registerscreen/>}/>
      <Route path="/login" element={<Loginscreen/>}/>
      <Route path="/orders" element={<Ordersscreen/>}/>




      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
