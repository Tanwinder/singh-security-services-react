import React from 'react'
import NavLinks from '../navlinks/NavLinks'
import { NavLink } from 'react-router-dom'
import logoImage from '../../assetfiles/images/singhsecuritylogo1.png'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="app-navbar navbar">
      <div className="logo">
        <NavLink to="/" >
          <div className="imagelogo">
          <img src={logoImage} alt="Singh Security" className="imagelogo__inner" />  
          </div>
        </NavLink>
      </div>
      <NavLinks />
      <div className="phone">
        <div className="phone-content">Call Now for a FREE QUOTE!</div>
        <a href="tel:+1403-992-7629" className="phone-link"><span className="phone-number">403-992-7629</span></a>
      </div>
  </div>
  )
}

export default Navbar;


{/* <a class="nav" routerLink="/" routerLinkActive="active"><span>Home</span></a>
<a class="nav" routerLink="/commercial" routerLinkActive="active"><span>Commercial</span></a>
<a class="nav" routerLink="/residential" routerLinkActive="active"><span>Residential</span></a>
<a class="nav" routerLink="/solutions" routerLinkActive="active"><span>Solutions</span></a>
<a class="nav" routerLink="/about" routerLinkActive="active"><span>About</span></a> */}