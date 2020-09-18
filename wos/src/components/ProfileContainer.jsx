import './Profile.css';
import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.cookieUserId;
        }
        this.props.getProfile(userId);
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    cookieUserId: state.Auth.id,
});


let withUrlDataContainerComponent = withRouter(ProfileContainer);
let RedirectedComponent = withAuthRedirect(withUrlDataContainerComponent)

export default connect(mapStateToProps, {getProfile})(RedirectedComponent);