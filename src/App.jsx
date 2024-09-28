import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from "./Navbar";

import Content from "./Content";

import Third from "./Third";

import Fourth from "./Fourth";

import Footer from "./Footer";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
     

     <Navbar/>
    <Content/>
    <Third/>

   <Fourth/>

   <Footer/>

    </>
  )
}

export default App










