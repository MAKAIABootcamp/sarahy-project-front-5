import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../components/home/Home'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
