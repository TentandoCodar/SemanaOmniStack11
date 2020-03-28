import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/register" exact component={CreateAccount}></Route>
                <Route path="/profile" exact component={Profile}></Route>
                <Route path="/newincident" exact component={NewIncident}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;