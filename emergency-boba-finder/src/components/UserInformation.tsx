import React from "react"
// import axios from 'axios';
import Location from './Location';
import UserInterests from "./UserInterests";
import { Button } from "semantic-ui-react"

interface ISignUpProps {
    userFullName: string; // Facebook login will provide this information
}

interface ISignUpState {
    selectedInterestOptions: string[];
    location: string;
}

class UserInformation extends React.Component<ISignUpProps, ISignUpState>{
    state = {
        selectedInterestOptions: [],
        availableInterestOptions: [],
        location: ""
    }

    // componentDidMount() {
    //     // make axios request and save data;
    //     // axios.get(`URL`)
    //     //     .then(res => {
    //     //         let options = res.data.data.children.map(obj => obj.data);
    //     //         options = options.sort();
    //     //         this.setState({ options: options });
    //     //     });
    // }

    public render() {
        return (
            <>
                <span>{this.props.userFullName}</span>
                <Location location={this.state.location} onUpdateLocation={this.onUpdateLocation} />
                <UserInterests onInterestChanged={this.onInterestChanged} />
                <Button />
            </>
        );
    }

    private onInterestChanged = (selectedOptions: string[]) => {
        this.setState({ selectedInterestOptions: selectedOptions });
    }

    private onUpdateLocation = (updatedLocation: string) => this.setState({ location: updatedLocation });
}

export default UserInformation;

    // updateAddress(e: any) {
    //     e.preventDefault();
    //     axios.post("/location", {
    //         location: this.state.location
    //     })
    //     .then(function(response){
    //         console.log("response", response);
    //     })
    //     .catch(function(error){
    //         console.log("error", error);
    //     })
    // };