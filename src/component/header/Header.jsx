import React, { useState } from 'react'
import Menu from './components/Menu'
import Logo from './components/Logo'

const Header = () => {      

    return (
        <div className='header-container'>
            <Logo className='header-item' />
            <Menu className='header-item'/>
        </div>
    )
}

export default Header
