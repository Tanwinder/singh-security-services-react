import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';

const Routes = () => {
    return (
        <Switch>
            <Route path="/notauthorized" render={ () => <div> not authorized</div>} />
            <Route path="*" render={ () => <App/>} /> 
        </Switch>
    )
}

export default Routes;