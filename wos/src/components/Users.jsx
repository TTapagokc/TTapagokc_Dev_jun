import React from 'react'
import styles from './users.css';
import * as axios from 'axios';
import userAvatar from '../img/userNoAvatar.png'

class Users extends React.Component {
    //get request on server for set users on state when component will be mount
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

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.maxUsersOnPage);
        let pages = [];
        for (let i = 1; i <= pagesCount; ++i) {
            pages.push(i)
        }

        return <div className='usersBox'>
            {pages.map(
                p => {
                    return <span className={this.props.usersPageNumber === p && 'activePage'}
                                 onClick={() => this.onPageChanged(p)}> {p} </span>
                }
            )}

            {this.props.users.map(u =>
                <div>
                    <div>
                        <img className='profileImg' src={u.photos.small != null ? u.photos.small : userAvatar}
                             alt="avatar"/>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                        <div>
                            Name: {u.name}
                        </div>
                    </div>
                    <div> status: {u.status}
                        <div>
                            'location.city'
                        </div>
                    </div>
                </div>)}
        </div>

    }
}


export default Users;