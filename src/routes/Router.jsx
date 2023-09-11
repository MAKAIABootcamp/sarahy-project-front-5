import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../components/home/Home'
import Header from '../components/header/Header';
import Prueba from '../components/prueba/Prueba';
import Profile from '../components/profile/profile';


function Router() {
  return (

    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="prueba" element={<Prueba />}/>
          <Route path="prueba2" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
} 

export default Router;
