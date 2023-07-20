import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import AppRouter from './AppRouter'

function App() {
  

  return (
    <>
      {/* <Link to={"/Canvas"}>Canvas</Link> */}
      <AppRouter />
    </>
  )
}

export default App
