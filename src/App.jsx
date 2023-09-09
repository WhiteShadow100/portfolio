import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import AppRouter from './AppRouter'

import './style/canvas.css';
import SpaceShipDefender from './component/games/spaceship_defender/SpaceShipDefender'

function App() {
  

  return (
    <>
      {/* <AppRouter /> */}
      <SpaceShipDefender />
    </>
  )
}

export default App
