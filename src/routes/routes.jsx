import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import React from 'react'

function Routes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<h1>Home</h1>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Routes