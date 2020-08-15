import React from 'react'
import {connect} from "react-redux";
import {followAC, setCurentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPageNumber}&count=${this.props.maxUsersOnPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        })
    }
    onPageChanged = (pageNumber)=> {
        this.props.setCurentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.maxUsersOnPage}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      maxUsersOnPage={this.props.maxUsersOnPage}
                      usersPageNumber={this.props.usersPageNumber}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      onPageChanged={this.onPageChanged}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        usersPageNumber: state.UsersPage.usersPageNumber,
        maxUsersOnPage: state.UsersPage.maxUsersOnPage,
        totalUsersCount: state.UsersPage.totalUsersCount,
    }

};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurentPage: (numberPage) => {
            dispatch(setCurentPageAC(numberPage))
        },
        setUsersTotalCount: (totalUsers) => {
            dispatch(setUsersTotalCountAC(totalUsers))
        }
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);