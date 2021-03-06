import React from 'react'
import {connect} from "react-redux";
import {
    follow, getUsers,
    isFollowing,
    setCurrentPage,
    unfollow
} from "../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.usersPageNumber, this.props.maxUsersOnPage);
        // this.props.isFetching(true);
        //
        // UserAPI.getUsers(this.props.usersPageNumber, this.props.maxUsersOnPage).then(data => {
        //
        //     this.props.setUsers(data.items);
        //     this.props.setUsersTotalCount(data.totalCount);
        //     this.props.isFetching(false);
        //
        // })
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.maxUsersOnPage);
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
                   followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.UsersPage.followingInProgress
    }

};


export default connect(mapStateToProps, {
    getUsers,
    follow,
    unfollow,
    setCurrentPage,
    isFollowing,
})(UsersContainer);