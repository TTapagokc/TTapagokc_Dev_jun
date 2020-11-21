import {UserAPI, profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initionalState = {

    posts: [
        {id: 1, likes: 10, postmsg: 'First try to make :D'},
        {id: 2, likes: 120, postmsg: 'I think its works'},
        {id: 3, likes: 8, postmsg: 'Ayayayayayayay!!!'},
    ],
    textAreaUpDate: "",
    profile: null,
    status: "",

};

const ProfileReducer = (state = initionalState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6, postmsg: state.textAreaUpDate,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                textAreaUpDate: ""
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                textAreaUpDate: action.NewText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}
//Action creator's
export const ActionCreatorAddPost = () => {
    return {type: ADD_POST};
};
export const ActionCreatorUPText = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, NewText: text};
};
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile: profile};
};
export const setStatus = (status) => {
    return {type: SET_STATUS, status: status};
};
//thunk
export const getProfile = (userId) => (dispatch) => {
    UserAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultcode === 0) {
            dispatch(setStatus(response.data));
        }
    })
}
export default ProfileReducer;