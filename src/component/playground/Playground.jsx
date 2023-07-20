import { useState } from "react"
import { Link } from "react-router-dom"

function PlayGround(){

    const [count, setCount] = useState(0)
    const [vister, setVisiter] = useState('')

    return(
        <>
            <h1>Jeshan Maharjan</h1>

            <h2>{vister}</h2>
            <input
            placeholder='Enter your name...'
            onChange={(e) => {
                setVisiter(pre => (
                e.target.value
                ))
            }}
            />

            <h2>{"Count: " + count}</h2>
            <button
            onClick={() => {
                setCount(pre => (
                pre += 1
                ))
            }}
            >
            Click Me
            </button>

            <Link to={"/canvas"}>Canvas</Link>
        </>
    )
}

export default PlayGround;