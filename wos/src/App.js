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
                    <Route path='/Dialogs' render={() => <Dialogs avatar={props.state.dialogPage.avatar} msgElemets={props.state.dialogPage.msgElemets} dialogData={props.state.dialogPage.dialogData}/>}/>
                    <Route path='/MainContent' render={ () => <MainContent posts={props.state.MainContentPage.posts} textAreaUpDate={props.state.MainContentPage.textAreaUpDate} craftPost={props.craftPost} updateText={props.updateText} />} />
                </div>
            </div>
    );
}

export default App;
