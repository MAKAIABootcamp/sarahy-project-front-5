import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../page/register/Register';
import Login from '../page/login/Login';
import Birthday from '../page/birthday/Birthday';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="birthday" element={<Birthday />} />

    </Routes>
    </BrowserRouter>
  )
}

export default Router;