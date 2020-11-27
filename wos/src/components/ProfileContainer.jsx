import './Profile.css';
import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.cookieUserId;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    cookieUserId: state.Auth.id,
    status: state.ProfilePage.status,
});

//redirect to login*
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withAuthRedirect,
    withRouter
)(ProfileContainer);