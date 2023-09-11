import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../components/home/Home'
import Header from '../components/header/Header';
import Prueba from '../components/prueba/Prueba';
import Footer from '../components/footer/footer';



function Router() {
  return (

    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="prueba" element={<Prueba />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
} 

export default Router;
