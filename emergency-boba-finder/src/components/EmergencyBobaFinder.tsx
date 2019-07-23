import React from 'react'
import UserInterests from "./UserInterests"

class EmergencyBobaFinder extends React.Component {
    render() {
        return (
            <div>
                This is our EmergencyBobaFinder website!
                <UserInterests userFirstName={"tabitha"} />
            </div>
        );
    }
}

export default EmergencyBobaFinder;