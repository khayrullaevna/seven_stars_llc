import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__box">
        <img className="navbar__logo" src="./img/logo.png" alt="logo"/>

        <ul className="navbar__list">
          <li className="navbar__item"><NavLink className="navbar__link" to='/home'>Home</NavLink></li>
          <li className="navbar__item"><NavLink className="navbar__link" to='/drivers'>Drivers</NavLink></li>
          <li className="navbar__item"><NavLink className="navbar__link" to='/about'>About</NavLink></li>
          <li className="navbar__item"><NavLink className="navbar__link" to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
