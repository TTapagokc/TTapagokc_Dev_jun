import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import ProfileReducer from "./profile-reducer";
import UsersReducer from "./users-reducer";
import AuthReducer from "./auth-reducer";

let redusers = combineReducers({
    dialogPage: dialogReducer,
    ProfilePage: ProfileReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    }
);
let store = createStore(redusers);

window.store = store;
export default store;