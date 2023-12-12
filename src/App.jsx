import React, { useState } from 'react'
import Navbar from './components/navbar'
import Profile from './components/profile'
import About from './components/about'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App