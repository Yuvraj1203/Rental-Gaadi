import { useState } from 'react'
import Layout from './components/Layout/Layout'
import About from './components/Pages/About/About'
import Contact from './components/Pages/Contact/Contact'
import Service from './components/Pages/Service/Service'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nopage from './components/Pages/Nopage/Nopage'
import Home from './components/Pages/Home/Home'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
