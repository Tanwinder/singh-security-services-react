import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './MobileNavbar.scss'
import NavLinks from '../navlinks/NavLinks'
import logoImage from '../../assetfiles/images/logo11.png'

const MobileNavbar = props => {
  return (
    <header className="navbar-mobile">
      <div className="logo">
        <NavLink to="/" >
        <img src={logoImage} alt="Singh Security" className="imagelogo__inner" style={{width: "100%", height: "100%"}} /> 
          {/* SinghSecurity */}
        </NavLink>
      </div>
      <div className="phone">
          <a href="tel:+1403-992-7629" className="phone-link"><span className="phone-number">403-992-7629</span></a>
      </div>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
      <NavLinks orderStyle="phone" />
        {/* <app-nav *ngFor="let nav of navs" [navclassName]="nav.navclass" [name]="nav.name" [routerlink]="nav.routerlink"></app-nav> */}
  </header>
  )
}

MobileNavbar.propTypes = {

}

export default MobileNavbar

