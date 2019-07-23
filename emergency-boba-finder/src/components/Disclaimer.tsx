import React from 'react';
import { Checkbox } from 'semantic-ui-react';

export interface IDisclaimer {
    checked: boolean,
};

class Disclaimer extends React.Component<{}, IDisclaimer> {
    constructor(props: any) {
        super(props);
        this.state = {
            checked: false,
        };
    }
    render() {
        return (
            <div>
                <Checkbox 
                    label="I agree to the terms and services"
                    onClick={e => this.setState({checked: !this.state.checked})}
                />
            </div>
        );
    }
}

export default Disclaimer;