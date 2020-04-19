import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavLinks = ({item}) => {
    return (
        <NavLink className="nav" key={item.id} to={`${item.path}`} activeClassName="active">
            <span>{item.desc}</span>
        </NavLink>
    )
}

NavLinks.propTypes = {

}

export default NavLinks
