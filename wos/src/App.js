import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import MainContent from './components/MainContetn.jsx';
import Dialogs from "./components/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs' render={() => <Dialogs
                        dialogPage={props.state.dialogPage}/>}/>
                    <Route path='/MainContent' render={ () => <MainContent
                        MainContentPage={props.state.MainContentPage}
                        dispatch={props.dispatch} />} />
                </div>
            </div>
    );
}

export default App;
