import React from 'react'
import teslaLogo from '../img/teslaLogo.svg'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className="nav-start">
        <img src={teslaLogo} className="nav-start" alt="teslaLogo"/>
        </div>
        <div className="nav-mid">
            <p>Model S</p>
            <p>Model 3</p>
            <p>Model X</p>
            <p>Model Y</p>
            <p>Solar Roof</p>
            <p>Solar Panel</p>
        </div>
        <div className="nav-end">
            <p>Shop</p>
            <p>Tesla Account</p>

        </div>
    </div>
  )
}

export default Header