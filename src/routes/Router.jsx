import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../components/home/Home';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';
import Wedding from '../components/wedding/Wedding';
import Domicilio from '../components/domicilio/Domicilio';
import Allies from '../components/allies/Allies';
import Price from '../components/price/Price';



function Router() {
  return (

    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="bodas" element={<Wedding />}/>
          <Route path="domicilio" element={<Domicilio />}/>
          <Route path="/aliados" element={<Allies />}/>
          <Route path="/cotizacion" element={<Price />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
} 
export default Router;

