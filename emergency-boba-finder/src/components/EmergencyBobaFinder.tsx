import UserInformation from './UserInformation';
import './EmergencyBobaFinder.css';

import React from 'react';
import UserHomePage from './UserHomePage';
import { Route } from 'react-router';


class EmergencyBobaFinder extends React.Component {
    render() {
        return (
            <div className="page">
                <Route
                    path='/'
                    render={() => <UserInformation userFullName={"Tabitha"} />}
                />
                <Route
                    path='/updateSettings'
                    render={() => <UserInformation />}
                />
                <Route path="/homepage" component={UserHomePage} />
            </div>
        );
    }
}

export default EmergencyBobaFinder;