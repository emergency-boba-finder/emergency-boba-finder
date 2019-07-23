import React from 'react';
import { Form } from 'semantic-ui-react';

export interface ILocation {
    location: string;
    onUpdateLocation: (newLocation: string) => void;
};

class Location extends React.Component<ILocation>{
    render() {
        return (
            <Form>
                <Form.Field>
                    What's your Location?
                        <input
                        placeholder="City, state, zipcode"
                        value={this.props.location}
                        onChange={e => this.props.onUpdateLocation(e.target.value)}
                    />
                </Form.Field>
            </Form>
        );
    }
}

export default Location;