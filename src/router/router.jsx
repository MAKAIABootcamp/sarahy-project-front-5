import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../components/register/Register';
import Login from '../components/login/Login';
import Profile from '../components/profile/profile';
import Locations from '../components/locations/locations';
import AboutUs from '../components/aboutUs/aboutUs';
import Companies from '../components/companies/companies';
import Home from '../components/home/Home';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Wedding from '../components/wedding/Wedding';
import Allies from '../components/allies/Allies';
import Domicilio from '../components/domicilio/Domicilio';
import EventSocial from '../page/socialEvent/EventSocial';
import Birthday from '../page/birthday/Birthday';
import Quote from '../page/quote/Quote';
import EventCompany from '../page/eventCompany/EventCompany';
import Services from '../page/ourServices/Services';
import WeddingPage from '../page/wedding/WeddingPage';
// import PrivateRoutes from './privateRoutes';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        {/* publicas */}
        <Route path="/" element={<Home />} />
        <Route path="/ingresar" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/empresariales" element={<Companies />} />
        <Route path="/ubicaciones" element={<Locations />} />
        <Route path="/quienes-somos" element={<AboutUs />} />
        <Route path="/bodas" element={<Wedding />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/aliados" element={<Allies />} />
        <Route path="/domicilio" element={<Domicilio />} />
        <Route path="/cumpleaños" element={<Birthday />} />
        <Route path="quote" element={<Quote />} />
        <Route path="/empresariales" element={<EventCompany />} />
        <Route path="/social" element={<EventSocial />} />
        <Route path="/wedding" element={<WeddingPage />} />

     


      </Routes>
      <Footer />
    </BrowserRouter>
  )
}




export default Router;









