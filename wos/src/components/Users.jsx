import React from 'react'
import './users.css';
import * as axios from 'axios';
import userAvatar from '../img/userNoAvatar.png'

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        })
    }

    return (
        <div className='usersBox'>
            {props.users.map(u =>
                <div>
                    <div>
                        <img className='profileImg' src={u.photos.smal != null ? u.photos.smal : userAvatar}
                             alt="avatar"/>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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
    )
};

export default Users;