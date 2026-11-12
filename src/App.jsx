import './App.css'

import React from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import About from './groups/About'
import Projects from './groups/Projects'
import Contact from './groups/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>

    <Header/>
  

  

    <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>



    </div>
  )
}
export default App