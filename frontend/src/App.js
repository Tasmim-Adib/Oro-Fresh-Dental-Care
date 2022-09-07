
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import NavbarElements from './components/Navbar.Elements';
import AboutScreen from './Screens/AboutScreen';
import HomeScreen from './Screens/HomeScreen';
import ServiceScreen from './Screens/ServiceScreen';
import AdminScreen from './Screens/AdminScreen';
import Form from './components/Form';
import ContactScreen from './Screens/ContactScreen';
import ShowAppointment from './components/ShowAppointment';
import Register from './components/Register';
import Login from './Screens/Login';

function App() {
  return (
    <Router>
        <NavbarElements/>
        <Routes>
          <Route path="/" element={<HomeScreen/>} exact/>
          <Route path="/about" element={<AboutScreen/>}/>
          <Route path="/service" element={<ServiceScreen/>}/>
          <Route path= "/contact" element={<ContactScreen/>}/>
          <Route path="/admin" element={<AdminScreen/>}/>
          <Route path = "/newPatient" element={<Form/>}/>
          <Route path = "/showAppointments" element = {<ShowAppointment/>}/>
          <Route path = "/care" element = {<Register/>}/>
          <Route path = "/login" element = {<Login/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
