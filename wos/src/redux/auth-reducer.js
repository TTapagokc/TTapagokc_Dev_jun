import {AuthAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';


let initionalState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};

const AuthReducer = (state = initionalState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state;

    }
};

export const setUserAuth = (id, login, email) => {
    return {type: SET_AUTH_USER_DATA, data: {id, login, email}}
}

//thunk
export const getUserAuth = () => (dispatch) => {
    AuthAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setUserAuth(id, login, email));

        }
    })
}

export default AuthReducer;