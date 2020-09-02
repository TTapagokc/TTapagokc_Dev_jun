import React from 'react';
import {connect} from "react-redux";
import {setUserAuth} from "../redux/auth-reducer";
import * as axios from "axios";
import Header from "./Header";



class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials:true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setUserAuth(id, login, email);

            }
        })
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth,
        login: state.Auth.login,
    }
};

export default connect(mapStateToProps, {setUserAuth})(HeaderContainer);