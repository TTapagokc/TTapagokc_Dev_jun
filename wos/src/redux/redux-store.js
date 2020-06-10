import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import MainContentReducer from "./maincontent-reducer";

let redusers = combineReducers({
    dialogPage: dialogReducer,
    MainContentPage: MainContentReducer,
    }
);
let store = createStore(redusers);

export default store;