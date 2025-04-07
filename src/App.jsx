import { useState } from 'react'
import './App.css'
import Organizations from './components/Organizations'
import Navbar from './components/Navbar/Navbar'
import Home from './components/House/home'
import Details from './components/Details/Details'

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Details />
      <Organizations />
      
    </>
  )
}

export default App
