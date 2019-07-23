import React from 'react';
import { Button, Form } from 'semantic-ui-react';
// import axios from 'axios';

export interface ILocation {
    location: string,
};

class Location extends React.Component<{}, ILocation>{
    constructor(props: any) {
        super(props);
        this.state = {
            location: "",
        }
        // this.updateAddress = this.updateAddress.bind(this);
    }

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
                {/* <Button onClick={this.updateAddress}>Continue</Button> */}
            </div>
        );
    }
}

export default Location;