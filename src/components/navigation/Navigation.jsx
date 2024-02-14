import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navigation() {
  return (

    <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item"><NavLink className="navigation__link" to='/home'>Home</NavLink></li>
                <li className="navigation__item"><NavLink className="navigation__link" to='/drivers'>Drivers</NavLink></li>
                <li className="navigation__item"><NavLink className="navigation__link" to='/about'>About</NavLink></li>
                <li className="navigation__item"><NavLink className="navigation__link" to='/contact'>Contact</NavLink></li>
                
            </ul>
        </nav>
    </div>
  )
}



