import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../page/register/Register';
import Login from '../page/login/Login';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Register />} />
        <Route path="login" element={<Login />} />


    </Routes>
    </BrowserRouter>
  )
}

export default Router;