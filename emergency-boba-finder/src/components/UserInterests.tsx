import React from "react"
import { Dropdown, DropdownItemProps, DropdownProps, Button } from 'semantic-ui-react'
import axios from 'axios'

interface IUserInterestsProps {
    userFirstName: string;
}

interface IUserInterestsState {
    options: string[];
    selectedOptions: string[];
}

class UserInterests extends React.Component<IUserInterestsProps, IUserInterestsState>{
    state = {
        options: [],
        selectedOptions: []
    }

    componentDidMount() {
        // axios.get(`URL`)
        //     .then(res => {
        //         let options = res.data.data.children.map(obj => obj.data);
        //         options = options.sort();
        //         this.setState({ options: options });
        //     });
    }

    public render() {
        return (
            <>
                <span>{this.props.userFirstName}</span>
                <Dropdown style={{ display: "inline-block" }} placeholder='Select interests' fluid multiple selection options={this.getDropdownOptions()} onChange={this.onCloseDropdown} />
                <Button style={{ display: "inline-block" }} onClick={this.sendUserSelectedInterests}>Selected Available Interests</Button>
            </>

        );
    }

    private getDropdownOptions(): DropdownItemProps[] {
        return this.state.options.map((interestOption: string) => {
            const trimmedOption = interestOption.trim();

            return {
                key: trimmedOption,
                text: interestOption,
                value: trimmedOption
            }
        });
    }

    private onCloseDropdown = (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps): void => {
        if (data.value && data.value instanceof Array) {
            const selectionOptions = data.value.map(option => {
                return option.toString()
            });
            this.setState({ selectedOptions: selectionOptions });
        }
    }

    private sendUserSelectedInterests = () => {
        // post to Axios
        // console.log(this.state.selectedOptions);
    }
}

export default UserInterests;