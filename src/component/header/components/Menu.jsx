import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Menu = ({ className='' }) => {

    // holds menu data
    const [menu, setMenu] = useState([
        {
            title: "Game",
            link: ''
        }, {
            title: "Porfolio",
            link: '/portfolio'
        }
    ])

    return (
        <ul className={`${className} menu-container`}>
            {
                menu.map(temp => (
                    <li key={uuidv4()} className='menu-item'><Link to={temp.link}>{temp.title}</Link></li>
                ))
            }
        </ul>
    )
}

export default Menu
