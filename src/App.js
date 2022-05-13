import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Reviews from './Pages/Reviews/Reviews';
import Navication from'./Sheard/Navication/Navication.jsx'

function App() {
  return (
    <>
    <Navication/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='appointment' element={<Appointment/>}></Route>
        <Route path='reviews' element={<Reviews/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='login' element={<Login/>}></Route>
      </Routes>
    </>
  );
}

export default App;
