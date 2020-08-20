import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import ProfileReducer from "./profile-reducer";
import UsersReducer from "./users-reducer";

let redusers = combineReducers({
    dialogPage: dialogReducer,
    ProfilePage: ProfileReducer,
    UsersPage: UsersReducer
    }
);
let store = createStore(redusers);

export default store;