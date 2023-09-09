import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import AppRouter from './AppRouter'

import './style/canvas.css';
import ProductivityTimer from './component/canvas/productivity_timer/ProductivityTimer'

function App() {
  

  return (
    <>
      {/* <AppRouter /> */}
      <ProductivityTimer />
    </>
  )
}

export default App
