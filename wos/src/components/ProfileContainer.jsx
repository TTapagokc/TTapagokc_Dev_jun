import './Profile.css';
import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.cookieUserId;
        }
        this.props.getProfile(userId);
    }

    render() {
        //temp before HOC
        if (!this.props.isAuth)
            return <Redirect to={'/login'} />


        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    cookieUserId: state.Auth.id,
    isAuth: state.Auth.isAuth,
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfile})(withUrlDataContainerComponent);