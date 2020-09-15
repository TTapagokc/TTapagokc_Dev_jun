import React from 'react';
import './App.css';
import DialogsContainer from "./components/DialogsContainer";
import {Route} from "react-router-dom";
import UsersContainer from "./components/UsersContainer";
import ProfileContainer from "./components/ProfileContainer";
import NavBar from "./components/NavBar";
import HeaderContainer from "./components/HeaderContainer";
import LoginPage from "./components/LoginPage";



function App() {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavBar />
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer />}/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer />}/>
                <Route path='/users'
                       render={() => <UsersContainer />}/>
                <Route path='/login'
                       render={() => <LoginPage />}/>
            </div>
        </div>
    );
}

export default App;
