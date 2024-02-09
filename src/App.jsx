import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'
import AppRouter from './AppRouter'
import SnakeGame from './component/games/snake_game/SnakeGame'
import Header from './component/header/Header'

// CSS necssary for snake game
// import './App.css'
import './style/header.scss'
import './style/body.scss'
import './style/canvas.css';
import './style/anchor.scss';
import './style/portfolio.scss';

function App() {

  return (
    <>
      <Header />
      <div className='main-body'>
        <AppRouter />
      </div>
      {/* <SnakeGame width={400} height={300} /> */}
    </>
  )
}

export default App
