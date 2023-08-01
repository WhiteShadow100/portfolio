import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import AppRouter from './AppRouter'

import './style/canvas.css';
import axios from 'axios'

function App() {

  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get('https://whiteshadow.bsite.net/WeatherForecast')
      .then(response => {
        if(response.status == 200){
          setData(response.data)
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <AppRouter />

      {
        (data || []).length > 0 ? (
          <>
            <h1>This Whether Forecast:</h1>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Temperature F</th>
                  <th>Temperature C</th>
                  <th>Summary</th>
                </tr>
              </thead>
              {
                data.map(a => (
                  <tr>
                    <td>{a.date}</td>
                    <td>{a.temperatureC}</td>
                    <td>{a.temperatureF}</td>
                    <td>{a.summary}</td>
                  </tr>
                ))
              }

            </table>
          </>
        ) : (
          <></>
        )
      }
    </>
  )
}

export default App
