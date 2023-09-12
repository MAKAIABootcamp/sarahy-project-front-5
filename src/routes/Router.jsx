import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../components/home/Home'
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';
import Wedding from '../components/wedding/Wedding';



function Router() {
  return (

    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="bodas" element={<Wedding />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
} 
export default Router;
