import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import AppRouter from './AppRouter'

import './style/canvas.css';
import axios from 'axios'

function App() {
  
  useEffect(() => {
    axios.get('https://whiteshadow.bsite.net/WeatherForecast')
      .then(response => {
        console.log("Response => ", response  )
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
