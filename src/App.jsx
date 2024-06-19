import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Slidebar from './components/Slidebar'
import Card from './components/Card'
import Contact from './components/Contact'
function App() {


  return (
    <>
     <Navbar/>
     <Slidebar/>
     <Card/>
    <Contact/>
    </>
  )
}

export default App
