import UserInformation from './UserInformation';
import './EmergencyBobaFinder.css';

import React from 'react';
import UserHomePage from './UserHomePage';
import { Route } from 'react-router';


import Login from './Login';

class EmergencyBobaFinder extends React.Component {
    render() {
        return (
            <div className="page">
                <Route path="/" component={Login} />
                <Route
                    path='/create'
                    render={() => <UserInformation userFullName={"Tabitha"} />}
                />
                <Route
                    path='/updateSettings'
                    render={() => <UserInformation />}
                />
                <Route path="/homepage" component={UserHomePage} />
                {/* <UserInformation userFullName={"Tabitha"} /> */}
            </div>
        );
    }
}

export default EmergencyBobaFinder;