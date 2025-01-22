{/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/}
import './App.css'
{/* React will always be required in react apps. */}
import React from "react";
import Header from './components/Header.jsx'
import Grid from './components/Grid.jsx'

function App() {
  return (
    <div className = "app">
      <Header />
      <Grid />      
      <img src = "/skyline-darkness.png"/>
    </div>
  );
}

export default App;
