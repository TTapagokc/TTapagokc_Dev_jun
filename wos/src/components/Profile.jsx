import './Profile.css';
import React from 'react';
import MyPostContainer from "./MyPostContainer";
import Preloader from "./Preloader/Preloader";


const Profile = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className='MainContent'>
            <img src={props.profile.photos.large} alt="pa"/>
            <div className='profileInfo'>
                <div>Full Name: {props.profile.fullName}.</div>
                <div>About me: {props.profile.aboutMe}.</div>
                <div>Looking For A Job: {props.profile.lookingForAJob ? 'Yes' : 'No'}.</div>
                <div>Job Description: {props.profile.lookingForAJobDescription} </div>
                <div>
                    Contacts:
                    <br/> <a href={props.profile.contacts.facebook}>Facebook</a>
                    <br/> <a href={props.profile.contacts.vk}>Vk</a>
                    <br/> <a href={props.profile.contacts.twitter}>Twitter</a>
                    <br/> <a href={props.profile.contacts.instagram}>Instagram</a>
                    <br/> <a href={props.profile.contacts.github}>Github</a>
                </div>
            </div>
            <MyPostContainer/>
        </div>
    );
}

export default Profile;