import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    isFetching,
    setCurentPage,
    setUsers,
    setUsersTotalCount,
    unfollow
} from "../redux/users-reducer";
import Users from "./Users";
import {UserAPI} from "../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.isFetching(true);
        UserAPI.getUsers(this.props.usersPageNumber, this.props.maxUsersOnPage).then(data => {
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
            this.props.isFetching(false);

        })
    }

    onPageChanged = (pageNumber) => {
        this.props.isFetching(true);
        this.props.setCurentPage(pageNumber);
        UserAPI.getUsers(pageNumber, this.props.maxUsersOnPage).then(data => {
            this.props.setUsers(data.items);
            this.props.isFetching(false);
        })
    }

    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   maxUsersOnPage={this.props.maxUsersOnPage}
                   usersPageNumber={this.props.usersPageNumber}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetchingToggle}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        usersPageNumber: state.UsersPage.usersPageNumber,
        maxUsersOnPage: state.UsersPage.maxUsersOnPage,
        totalUsersCount: state.UsersPage.totalUsersCount,
        isFetchingToggle: state.UsersPage.isFetchingToggle,
    }

};


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurentPage,
    setUsersTotalCount,
    isFetching,
})(UsersContainer);