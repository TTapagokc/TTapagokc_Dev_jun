import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../redux/users-reducer";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;