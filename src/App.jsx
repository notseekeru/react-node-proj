import './App.css';
import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Headers/Home.jsx'
import About from './Components/Headers/About.jsx'
import Contact from './Components/Headers/Contact.jsx'

export default function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element= { <Home/> } />
            <Route path='/about' element= { <About/> } />
            <Route path='/contact' element= { <Contact/> } />
          </Routes>
      </Router>
    </>
  );
}

