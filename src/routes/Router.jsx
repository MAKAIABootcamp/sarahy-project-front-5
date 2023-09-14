import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../page/register/Register';
import Login from '../page/login/Login';
import Birthday from '../page/birthday/Birthday';
import Services from '../page/ourServices/Services';
import Quote from '../page/quote/Quote';
import EventSocial from '../page/socialEvent/EventSocial';
import EventCompany from '../page/eventCompany/EventCompany';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="birthday" element={<Birthday />} />
        <Route path="services" element={<Services/>} />
        <Route path="quote" element={<Quote/>} />
        <Route path="eventSocial" element={<EventSocial/>} />
        <Route path="eventCompany" element={<EventCompany/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default Router;