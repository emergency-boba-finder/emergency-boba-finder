import React from "react"
import { Dropdown, DropdownItemProps, DropdownProps } from 'semantic-ui-react'
import { getFakeInterests } from "./TempFakeData"

interface IUserInterestsProps {
    onInterestChanged: (selectedOptions: string[]) => void;
}

interface IUserInterestsState {
    options: string[];
}

class UserInterests extends React.Component<IUserInterestsProps, IUserInterestsState>{
    state = {
        options: []
    }

    componentDidMount() {
        // make axios request and save interest options
        
        this.setState({ options: getFakeInterests().sort() });
    }

    public render() {
        return (
            <Dropdown
                placeholder='Select interests'
                fluid multiple selection
                options={this.getDropdownOptions()}
                onChange={this.onInterestChanged}
                loading={this.state.options.length === 0}
            />
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

    private onInterestChanged = (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps): void => {
        if (data.value && data.value instanceof Array) {
            const selectedOptions = data.value.map(option => {
                return option.toString()
            });
            this.props.onInterestChanged(selectedOptions);
        }
    }
}

export default UserInterests;