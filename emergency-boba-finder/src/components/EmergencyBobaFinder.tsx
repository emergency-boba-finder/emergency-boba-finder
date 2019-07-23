import React from 'react';
import UserInformation from './UserInformation';

class EmergencyBobaFinder extends React.Component {
    render() {
        return (
            <div>
                This is our EmergencyBobaFinder website!
                <UserInformation userFullName={"Tabitha"} />
            </div>
        );
    }
}

export default EmergencyBobaFinder;