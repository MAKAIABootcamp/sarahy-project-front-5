import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../components/register/Register';
import Login from '../components/login/Login';
import Profile from '../components/profile/profile';
import Home from '../components/home/Home';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Allies from '../components/allies/Allies';
import WorkWhithUs from '../components/WorkWithUs/WorkWithUs';
import CompaniesEvents from '../components/companiesEvents/companiesEvents';
import SocialEvents from '../components/socialEvents/socialEvents';

import PrivateRoutes from './privateRoutes';
import { useSelector } from 'react-redux';

const Router = () => {
  let userLogged = null;
  const auth = useSelector((state) => state.aunthentication);
  let isLogged = false; 
  console.log(isLogged);
  
  if (auth.isLogged) 
  {
    userLogged = auth.userLogged.admi; 
    isLogged = true;
  }
  else 
  {
   userLogged = false;
  }
  // const userLogged = auth ? auth.userLogged.user.admi: false;
  console.log('', userLogged);
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        { isLogged &&  <Route path="/perfil" element={<Profile />} />}       
        <Route path="/" element={<Home />} />
        <Route path="/sociales" element={<SocialEvents />} />
        <Route path="/empresariales" element={<CompaniesEvents />} />

        { userLogged &&   <Route path="/aliados" element={<Allies />} />}        
        { !isLogged && <Route path="/ingresar" element={<Login />} />}

   
        <Route path="/registro" element={<Register />} />
        <Route path="/*" element={<Register />} />

       
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default Router;









