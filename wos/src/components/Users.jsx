import React from 'react'
import userAvatar from '../img/userNoAvatar.png'
import Preloader from "./Preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.maxUsersOnPage);
    let pages = [];
    for (let i = 1; i <= pagesCount; ++i) {
        pages.push(i)
    }

    return (
        <div className='usersBox'>
            {props.isFetching ? <Preloader/> : null}
            {pages.map(
                p => {
                    return <span className={props.usersPageNumber === p && 'activePage'}
                                 onClick={() => props.onPageChanged(p)}> {p} </span>
                }
            )}

            {props.users.map(u =>
                <div>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className='profileImg' src={u.photos.small != null ? u.photos.small : userAvatar}
                                 alt="avatar"/>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "dc5d97df-20bf-4c17-91ab-40f49e3663ce"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })

                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "dc5d97df-20bf-4c17-91ab-40f49e3663ce"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })

                                }}>Follow</button>}
                        </div>
                        <div>
                            Name: {u.name}
                        </div>
                    </div>
                    <div> status: {u.status}
                    </div>
                </div>)}
        </div>
    )
}

export default Users;