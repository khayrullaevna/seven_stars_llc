import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
        {/* <div className="header__logo-box">
            <img className="header__logo" src="img/logo.png" alt="logo" />
        </div> */}

        
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Seven Stars Logistics LLC</span>
                <br />

                <span className="heading-primary--sub">Bringing the latest innovations in freight transport, with a reliable <span className="heading-primary--ex">3+ </span>years of market experience.</span>
            </h1>

            {/* <a href="./Drivers" className="btn btn--white btn--animated">Get a job</a> */}
            <NavLink className="btn btn--white btn--animated" to='/drivers'>Drivers</NavLink>
        </div>
    </header>
  )
}
