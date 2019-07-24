import React from 'react';
import { Table, Label, Button, Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import './UserHomePage.css'

interface IUserHomePageState {
    redirect: boolean;
}

class UserHomePage extends React.Component<{}, IUserHomePageState> {
    state = {
        redirect: false
    }
    public render() {
        if (this.state.redirect) {
            return <Redirect push to="/updateSettings" />;
        }

        return (
            <div>
                <div className="settingsContainer">
                    <Button className="settingsButton" icon onClick={() => this.setState({ redirect: true })}>
                        <Icon name="setting" />
                    </Button>
                </div>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Meetup Name</Table.HeaderCell>
                            <Table.HeaderCell>Date/Time</Table.HeaderCell>
                            <Table.HeaderCell>Location</Table.HeaderCell>
                            <Table.HeaderCell>Friends</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Label ribbon>Current Meetup</Label>
                            </Table.Cell>
                            <Table.Cell>Feb 1, 2019 at 12pm</Table.Cell>
                            <Table.Cell>Boba downtown Seattle, 123 W Seattle St, 98052</Table.Cell>
                            <Table.Cell>Meghan, Allison, Shuotian</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Meetup 2</Table.Cell>
                            <Table.Cell>Feb 12, 2019 at 12pm</Table.Cell>
                            <Table.Cell>Boba downtown Seattle, 123 W Seattle St, 98052</Table.Cell>
                            <Table.Cell>Gerome, Jasmine, Jazmeow</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Meetup 3</Table.Cell>
                            <Table.Cell>Feb 21, 2019 at 12pm</Table.Cell>
                            <Table.Cell>Boba downtown Seattle, 123 W Seattle St, 98052</Table.Cell>
                            <Table.Cell>Imran, Satya, Prasannah</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default UserHomePage;