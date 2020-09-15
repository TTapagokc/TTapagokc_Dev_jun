import React from 'react';
import {connect} from "react-redux";
import {getUserAuth} from "../redux/auth-reducer";
import Header from "./Header";



class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getUserAuth();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth,
        login: state.Auth.login,
        email: state.Auth.email,
    }
};

export default connect(mapStateToProps, {getUserAuth})(HeaderContainer);