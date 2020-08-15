import React from 'react'
import userAvatar from '../img/userNoAvatar.png'

class Users extends React.Component {

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
                                 onClick={() => this.props.onPageChanged(p)}> {p} </span>
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