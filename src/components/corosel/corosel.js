import React from 'react'
import PropTypes from 'prop-types'
import { NavLink} from 'react-router-dom'
import './corosel.scss'

const Corosel = props => {
  return (
    <div className="corosel">
      <h1>Singh Security Services</h1>
      <h2>serving Calgary</h2>
      <button>
          <NavLink className="nav" to="/commercial" activeClassName="active"><span>Commercial</span></NavLink>
      </button>
      <button>
        <NavLink className="nav" to="/residential" activeClassName="active"><span>Residential</span></NavLink>
      </button>
    </div>
  )
}

Corosel.propTypes = {

}

export default Corosel

