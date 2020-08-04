import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import MainContentReducer from "./maincontent-reducer";
import UsersReducer from "./users-reducer";

let redusers = combineReducers({
    dialogPage: dialogReducer,
    MainContentPage: MainContentReducer,
    UsersPage: UsersReducer
    }
);
let store = createStore(redusers);

export default store;