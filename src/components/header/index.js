import React from 'react';
import Navbar from '../navbar/navbar'
import MobileNavbar from '../mobile-navbar/MobileNavbar'
import './header.scss'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isTablet
} from "react-device-detect";

const Header = () => {
  console.log("isBrowser,", isBrowser, "isTablet", isTablet)
  return(
    <div className="header">
      {
        isBrowser ? 
        <Navbar />
        :
        <MobileNavbar />
      }
      {/* <Navbar /> */}
      {/* <app-mobile-navbar></app-mobile-navbar> */}
    </div>
  )
}

export default Header;

