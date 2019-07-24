import './UserInformation.css';

import React from 'react';
import { Redirect } from 'react-router';
import { Button } from 'semantic-ui-react';

import Disclaimer from './Disclaimer';
import Interests from './Interests';
// import axios from 'axios';
import Location from './Location';

interface IUserInformationProps {
    userFullName?: string; // Facebook login will provide this information
}

interface IUserInformationState {
    selectedInterestOptions: string[];
    location: string;
    disclaimerChecked: boolean;
    redirect: boolean;
}

class UserInformation extends React.Component<IUserInformationProps, IUserInformationState>{
    state = {
        selectedInterestOptions: [],
        location: "",
        disclaimerChecked: false,
        disclaimerCompliant: false,
        redirect: false
    }

    componentDidMount() {
        // make axios request and save data;
        // Replace with axios response.
    }

    public render() {
        if (this.state.redirect) {
            return <Redirect push to="/homepage" />;
        }

        return (
            <div className="userInformation">
                {!!this.props.userFullName && <div className={"welcomeTitle"}>Welcome {this.props.userFullName}</div>}
                <div className={"description"}>Please update the below information</div>
                <Location onLocationChanged={this.onUpdateLocation} />
                <Interests onInterestChanged={this.onInterestChanged} />
                {!!this.props.userFullName && <Disclaimer onChecked={this.toggleDisclaimerChecked} />}
                <Button disabled={!this.isInformationComplete()} onClick={this.submitUserInformation}>Submit</Button>
            </div>
        );
    }

    private onInterestChanged = (selectedOptions: string[]) => {
        this.setState({ selectedInterestOptions: selectedOptions });
    }

    private onUpdateLocation = (updatedLocation: string) => this.setState({ location: updatedLocation });

    private toggleDisclaimerChecked = (checked: boolean) => {
        this.setState({ disclaimerChecked: checked })
    }

    private isInformationComplete = (): boolean => {
        const { selectedInterestOptions, location, disclaimerChecked } = this.state;
        return (disclaimerChecked || !this.props.userFullName) && location.length > 0 && selectedInterestOptions.length > 0;
    }

    private submitUserInformation = () => {
        // Add axios post

        // For debugging - delete when path is available
        // TODO delete
        // console.log("Selected interest options: " + this.state.selectedInterestOptions + " location: " + this.state.location + " disclaimer: " + this.state.disclaimerChecked);
        // If succeeded, proceed
        this.setState({ redirect: true });
    }
}

export default UserInformation;