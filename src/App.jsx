import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import AppRouter from './AppRouter'

import './style/canvas.css';
import SnakeGame from './component/games/snake_game/SnakeGame'

function App() {
  

  return (
    <>
      {/* <AppRouter /> */}
      <SnakeGame width={400} height={300} />
    </>
  )
}

export default App
