import React from 'react';
import { Dropdown, DropdownItemProps, DropdownProps } from 'semantic-ui-react';
import axios from 'axios';

import { getFakeInterests } from './TempFakeData';

interface IUserInterestsProps {
    onInterestChanged: (selectedOptions: string[]) => void;
}

interface IUserInterestsState {
    options: string[];
}

class Interests extends React.Component<IUserInterestsProps, IUserInterestsState>{
    state = {
        options: []
    }

    componentDidMount() {
        // make axios request for available options

        // this.setState({ options: getFakeInterests().sort() });
        axios.get('/interests')
            .then(function(response){
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                console.log("made it");
            });
            
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

export default Interests;