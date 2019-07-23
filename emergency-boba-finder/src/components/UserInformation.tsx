import React from "react"
// import axios from 'axios';
import Location from './Location';
import Interests from "./Interests";
import { Button } from "semantic-ui-react"
import Disclaimer from "./Disclaimer";
import './UserInformation.css';

interface IUserInformationProps {
    userFullName: string; // Facebook login will provide this information
}

interface IUserInformationState {
    selectedInterestOptions: string[];
    location: string;
    disclaimerChecked: boolean;
}

class UserInformation extends React.Component<IUserInformationProps, IUserInformationState>{
    state = {
        selectedInterestOptions: [],
        location: "",
        disclaimerChecked: false
    }

    componentDidMount() {
        // make axios request and save data;
    }

    public render() {
        return (
            <div className="userInformation">
                <div className={"welcomeTitle"}>Welcome {this.props.userFullName}</div>
                <div className={"description"}>Please update the below information</div>
                <Location location={this.state.location} onUpdateLocation={this.onUpdateLocation} />
                <Interests onInterestChanged={this.onInterestChanged} />
                <Disclaimer onChecked={this.toggleDisclaimerChecked} />
                <Button onClick={this.submitUserInformation}>Submit</Button>
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

    private submitUserInformation = () => {
        // Add axios post

        // For debugging - delete when path is available
        // TODO delete
        // console.log("Selected interest options: " + this.state.selectedInterestOptions + " location: " + this.state.location + " disclaimer: " + this.state.disclaimerChecked);
    }
}

export default UserInformation;