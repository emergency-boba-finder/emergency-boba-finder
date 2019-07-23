import React from 'react';
import { Checkbox, CheckboxProps } from 'semantic-ui-react';

export interface IDisclaimer {
    onChecked: (checked: boolean) => void;
};

class Disclaimer extends React.Component<IDisclaimer> {
    render() {
        return (
            <div>
                <Checkbox
                    label="I agree to the terms and services"
                    onChange={this.changeChecked}
                />
            </div>
        );
    }

    private changeChecked = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps): void => {
        this.props.onChecked(data.checked || false);
    }

}

export default Disclaimer;