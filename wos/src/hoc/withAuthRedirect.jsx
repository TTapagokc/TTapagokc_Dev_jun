import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";


export const withAuthRedirect = (Component) => {


    const mapStateToPropsForAuth = (state) => {
        return {
            isAuth: state.Auth.isAuth,
        }
    };


    class RedirectedComponent extends React.Component {

        render() {
            if (!this.props.isAuth)
                return <Redirect to={'/login'} />
            return <Component {...this.props} />
        }

    }
    return connect(mapStateToPropsForAuth)(RedirectedComponent);
}