import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import {Nav} from './navs'
import './nav.scss'

const NavLinks = ({orderStyle}) => {
    return (
        <div className= {orderStyle === "vertical" ? "navbar-navs__footer" : orderStyle === "phone" ? "menu" : "navbar-navs"}>
        {
          Nav && Nav.map( item => {
              if( orderStyle === "phone" ) {
                return (
                  <div className="mobile_nav">
                    <NavLink
                      className={orderStyle === "vertical" ? "footer-nav" : orderStyle === "phone" ? "mobile_nav__anchor" : "nav"} 
                      key={item.id} 
                      to={`${item.path}`} 
                      activeClassName="active"
                      >
                          <span>{item.desc}</span>
                      </NavLink>
                  </div>
                )
              }
              return (
                <NavLink
                className={orderStyle === "vertical" ? "footer-nav" : "nav"} 
                key={item.id} 
                to={`${item.path}`} 
                activeClassName="active"
                >
                    <span>{item.desc}</span>
                </NavLink>
              )
          })
        }
          {/* <app-nav *ngFor="let nav of navs" [navclassName]="nav.navclassName" [name]="nav.name" [routerlink]="nav.routerlink"></app-nav> */}
      </div>
    )
}

NavLinks.propTypes = {

}

export default NavLinks
