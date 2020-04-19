import React from 'react'
import {Nav} from './navs'
import NavLinks from './NavLinks'
import { NavLink } from 'react-router-dom'
import logoImage from '../../assetfiles/images/singhsecuritylogo1.png'
import './nav.scss'
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
      <div className="navbar-navs">
        {
          Nav && Nav.map( ac => <NavLinks key={ac.id} item={ac} />)
        }
          {/* <app-nav *ngFor="let nav of navs" [navclassName]="nav.navclassName" [name]="nav.name" [routerlink]="nav.routerlink"></app-nav> */}
      </div>
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