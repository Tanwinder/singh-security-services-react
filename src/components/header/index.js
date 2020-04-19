import React from 'react';
import Navbar from '../navbar/navbar'
import './header.scss'

const Header = () => {
  return(
    <div className="header">
      <Navbar />
      {/* <app-mobile-navbar></app-mobile-navbar> */}
    </div>
  )
}

export default Header;

