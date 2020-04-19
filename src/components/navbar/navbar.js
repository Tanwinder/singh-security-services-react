import React from 'react'
import { route } from ''

const AppNavbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* <a routerLink="/" >SinghSecurity</a> */}
      </div>
      <div className="navbar-navs">
        {

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

export default AppNavbar;


<a class="nav" routerLink="/" routerLinkActive="active"><span>Home</span></a>
<a class="nav" routerLink="/commercial" routerLinkActive="active"><span>Commercial</span></a>
<a class="nav" routerLink="/residential" routerLinkActive="active"><span>Residential</span></a>
<a class="nav" routerLink="/solutions" routerLinkActive="active"><span>Solutions</span></a>
<a class="nav" routerLink="/about" routerLinkActive="active"><span>About</span></a>