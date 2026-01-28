import './App.css';
import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Headers/Home.jsx'
import About from './Components/Headers/About.jsx'
import Profile from './Components/Headers/Profile.jsx'
import Header from './Components/Header.jsx'
import Users from './Components/Users.jsx';

export default function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/profile' element={<Profile/>}/>

          <Route path='' element={<Users/>}/>
        </Routes>
      </Router>
    </>
  );
}