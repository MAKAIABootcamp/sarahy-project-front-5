import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../page/register/Register';
import Login from '../page/login/Login';
import Profile from '../components/profile/profile';
import Locations from '../components/locations/locations';
import AboutUs from '../components/aboutUs/aboutUs';
import Companies from '../components/companies/companies';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        {/* <Route path="/" element={<Register />} />
        <Route path="login" element={<Login />} /> */}

        <Route path="/" element={<Companies />} />


    </Routes>
    </BrowserRouter>
  )
}

export default Router;