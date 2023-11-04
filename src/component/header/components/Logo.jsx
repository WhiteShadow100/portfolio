import React from 'react'
import horse from './../../../assets/svg/horse.svg'

const Logo = ({ className }) => {
  return (
    <div className={`${className} logo-container`}>
        <img className='logo-icon' src={horse} alt='logo' />
        <h3>White Shadow</h3>
    </div>
  )
}

export default Logo
