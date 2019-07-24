import React from 'react';
import { Dropdown, DropdownItemProps, DropdownProps } from 'semantic-ui-react';

import { getFakeLocations } from './TempFakeData';

interface IUserInterestsProps {
    onLocationChanged: (selectedOption: string) => void;
}

interface IUserInterestsState {
    options: string[];
}

class Location extends React.Component<IUserInterestsProps, IUserInterestsState>{
    state = {
        options: []
    }

    componentDidMount() {
        // make axios request for available options

        this.setState({ options: getFakeLocations().sort() });
    }

    public render() {
        return (
            <Dropdown
                placeholder='Select location'
                fluid selection
                options={this.getDropdownOptions()}
                onChange={this.onLocationChanged}
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

    private onLocationChanged = (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps): void => {
        if (data.value) {
            this.props.onLocationChanged(data.value.toString());
        }
    }
}

export default Location;