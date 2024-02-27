import React from 'react'
import logo from '../asserts/logo.png'

const Header = () => {
  return (
    <div className="header-container">
        <img src={logo} alt="" className='header-img'/>
    </div>
  )
}

export default Header