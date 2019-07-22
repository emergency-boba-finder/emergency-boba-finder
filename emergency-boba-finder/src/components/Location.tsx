import React from 'react';
import { Button, Form } from 'semantic-ui-react';

export interface ILocation {
    location: string,
};

// add axios

class Location extends React.Component<{}, ILocation>{
    constructor(props: any) {
        super(props);
        this.state = {
            location: "",
        }
    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Field>
                        What's your Location?
                        <input 
                            placeholder="City, state, zipcode"
                            value={this.state.location}
                            onChange={e => this.setState({location: e.target.value})}
                        />
                    </Form.Field>
                </Form>
                <Button>Continue</Button>
            </div>
        );
    }
}

export default Location;