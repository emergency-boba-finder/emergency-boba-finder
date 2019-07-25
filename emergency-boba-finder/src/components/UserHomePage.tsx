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
                            <Table.HeaderCell>Meetup</Table.HeaderCell>
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
                            <Table.Cell>July 27, 2019 at 12pm</Table.Cell>
                            <Table.Cell>Boba Express, 15600 NE 8th St, Bellevue, WA 98008</Table.Cell>
                            <Table.Cell>Christina, Derek, George</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Meetup 2</Table.Cell>
                            <Table.Cell>August 3, 2019 at 12pm</Table.Cell>
                            <Table.Cell>Sharetea, 1112 110th Ave NE #107, Bellevue, WA 98004</Table.Cell>
                            <Table.Cell>Meridith, Alex, Richard</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Meetup 3</Table.Cell>
                            <Table.Cell>August 10, 2019 at 12pm</Table.Cell>
                            <Table.Cell>Tiger Bites, 14701 NE 20th St Suite M-12, Bellevue, WA 98007</Table.Cell>
                            <Table.Cell>Miranda, Preston, Joe</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default UserHomePage;