import React from 'react'
import './users.css';
import * as axios from 'axios';
import userAvatar from '../img/userNoAvatar.png'

class Users extends React.Component {

    //get request on server for set users on state when component will be mount
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return  <div className='usersBox'>
            {this.props.users.map(u =>
                <div>
                    <div>
                        <img className='profileImg' src={u.photos.smal != null ? u.photos.smal : userAvatar}
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
                            {u.name}
                        </div>
                    </div>
                    <div> 'location.country'
                        <div>
                            'location.city'
                        </div>
                    </div>
                </div>)}
        </div>

    }
}


export default Users;