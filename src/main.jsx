import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'

// CSS necessary for snake game
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </HashRouter>
)
