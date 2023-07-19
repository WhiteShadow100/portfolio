import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Jeshan Maharjan</h1>

      <h2>{"Count" + count}</h2>
      <button
        onClick={() => {
          setCount(pre => (
            pre += 1
          ))
        }}
      >Click Me</button>
    </>
  )
}

export default App
