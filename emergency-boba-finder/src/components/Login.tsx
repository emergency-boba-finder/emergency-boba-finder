import React from 'react';
import './Login.css'
import { Redirect } from 'react-router';

interface IUserInformationState {
    redirect: boolean;
}


class Login extends React.Component<{}, IUserInformationState> {
    state = {
        redirect: false
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/create" />;
        }

        return (
            <>
                <div className="title">Welcome to the Emergency Boba Finder</div>
                <div className="description">Welcome to the Emergency Boba Friend Finder - where you can find friends locally with common interests or yes.. similarly Boba-minded individuals</div>
                <div onClick={this.onClick}>
                    <div style={{ pointerEvents: "none", paddingLeft: "10px" }} className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="false" ></div>
                </div>
            </>
        );
    }

    onClick = () => {
        this.setState({ redirect: true });
    }
}

export default Login;