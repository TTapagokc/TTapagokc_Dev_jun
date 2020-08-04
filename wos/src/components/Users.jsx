import React from 'react'
import './users.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers( [
            {
                id: 1,
                followed: true,
                FullName: "Horo",
                location: {city: 'Kiev', country: 'Ukraine'},
                photo: 'https://99px.ru/cms/templates/main_top_b.png'
            },
            {
                id: 2,
                followed: false,
                FullName: "Crist",
                location: {city: 'Militopol', country: 'Ukraine'},
                photo: 'https://sun9-47.userapi.com/c824601/v824601769/a3fa2/W9h5JIBIT8E.jpg'
            },
            {
                id: 3,
                followed: true,
                FullName: "Sven",
                location: {city: 'Donetsk', country: 'Ukraine'},
                photo: 'https://www.meme-arsenal.com/memes/33621cce7259d40c4340cee244b8f73a.jpg'
            },
            {
                id: 4,
                followed: false,
                FullName: 'TTapagokc',
                location: {city: 'Harkov', country: 'Ukraine'},
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNI3RXk3o1h6j20m0_A-mNOVATbObRGJQicHEh3gceO-TQaA-g'
            },])
    }

    return (
        <div className='usersBox'>
            {props.users.map(u =>
                <div>
                    <div>
                        <img className='profileImg' src={u.photo} alt="avatar"/>
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
                            {u.FullName}
                        </div>
                    </div>
                    <div> {u.location.country}
                        <div>
                            {u.location.city}
                        </div>
                    </div>
                </div>)}
        </div>
    )
};

export default Users;