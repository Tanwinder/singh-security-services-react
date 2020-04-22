import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import Commercial from '../containers/commercial/Commercial'
import Resdential from '../containers/residential/Residential'
import Services from '../containers/security-services/Services'
import About from '../containers/about/About'
import Home from '../containers/home/Home'

const RouteContainer = props => {
    return (
        <Switch>
            <Route path="/commercial" render={() => <Commercial />} />
            <Route path="/residential" render={() => <Resdential />} />
            <Route path="/services" render={() => <Services />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/home" render={() => <Home />} />
            <Redirect to="/home" />
        </Switch>
    )
}

RouteContainer.propTypes = {

}

export default RouteContainer
