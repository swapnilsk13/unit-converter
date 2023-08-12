import React from "react";
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Welcome from "./components/Welcome";
import Speed from "./components/Speed";
import Temperature from "./components/Temperature";
import Links from "./components/Links";

export default function App(){
  return(
    <div className="app">
       <h1>Converter</h1>
       <Links/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path="/speed" element={<Speed/>}/>
        <Route path="/temperature" element={<Temperature/>}/>
      </Routes>
    </div>
  )
}