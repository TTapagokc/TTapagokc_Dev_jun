import './Profile.css';
import React from 'react';
import MyPostContainer from "./MyPostContainer";
import Preloader from "./Preloader/Preloader";
import userAvatar from "../img/userNoAvatar.png";
import ProfileStatus from "./ProfileStatus";


const Profile = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className='MainContent'>
            <img src={props.profile.photos.large != null ? props.profile.photos.large : userAvatar} alt="pa"/>
            <div className='profileInfo'>
                <div>Profile name: {props.profile.fullName}</div>
                <ProfileStatus userStatus={props.status} updateStatus={props.updateStatus}/>
                <div>Looking For A Job: {props.profile.lookingForAJob ? 'Yes' : 'No'}.</div>
                <div>Job Description: {props.profile.lookingForAJobDescription} </div>
                <div className='Contacts'>
                    <details>
                        <summary>Contacts</summary>
                            <a href={props.profile.contacts.facebook}>Facebook</a>
                            <br/> <a href={props.profile.contacts.vk}>Vk</a>
                            <br/> <a href={props.profile.contacts.twitter}>Twitter</a>
                            <br/> <a href={props.profile.contacts.instagram}>Instagram</a>
                            <br/> <a href={props.profile.contacts.github}>Github</a>
                    </details>

                </div>
            </div>
            <br/>
            <MyPostContainer/>
        </div>
    );
}

export default Profile;