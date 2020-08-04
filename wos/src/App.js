import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import MainContent from './components/MainContetn.jsx';
import DialogsContainer from "./components/DialogsContainer";
import {Route} from "react-router-dom";
import UsersContainer from "./components/UsersContainer";



function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer />}/>
                <Route path='/mainContent'
                       render={() => <MainContent />}/>
                <Route path='/users'
                       render={() => <UsersContainer />}/>
            </div>
        </div>
    );
}

export default App;
