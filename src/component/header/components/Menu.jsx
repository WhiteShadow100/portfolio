import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ className='' }) => {

    // holds menu data
    const [menu, setMenu] = useState([
        {
            title: "Game",
            link: ''
        }, {
            title: "Porfolio",
            link: ''
        }
    ])

    return (
        <ul className={`${className} menu-container`}>
            {
                menu.map(temp => (
                    <li className='menu-item'><Link to={temp.link}>{temp.title}</Link></li>
                ))
            }
        </ul>
    )
}

export default Menu
