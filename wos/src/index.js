import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let Rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 craftPost={store.craftPost.bind(store)}
                 updateText={store.updateText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
};


store.subscribe(Rerender);

Rerender(store.getState());


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
