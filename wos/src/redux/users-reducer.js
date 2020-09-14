import {UserAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initionalState = {
    users: [],
    totalUsersCount: 0,
    maxUsersOnPage: 10,
    usersPageNumber: 1,
    isFetchingToggle: false,
    followingInProgress: []
};

const UsersReducer = (state = initionalState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                usersPageNumber: action.numberPage
            }
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsers
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetchingToggle: action.toggle
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.toggle
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;

    }
};

//ActionsCreators
export const followAccept = (userId) => {
    return {type: FOLLOW, userId}
}
export const unfollowAccept = (userId) => {
    return {type: UNFOLLOW, userId}
}
export const setUsers = (users) => {
    return {type: SET_USERS, users}
}
export const setCurrentPage = (numberPage) => {
    return {type: SET_CURRENT_PAGE, numberPage}
}
export const setUsersTotalCount = (totalUsers) => {
    return {type: SET_USERS_TOTAL_COUNT, totalUsers}
}
export const isFetching = (toggle) => {
    return {type: TOGGLE_IS_FETCHING, toggle}
}
export const isFollowing = (toggle, userId) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, toggle, userId}
}

//Thunks
export const getUsers = (usersPageNumber, maxUsersOnPage) => {
    return (dispatch) => {

        dispatch(isFetching(true));

        UserAPI.getUsers(usersPageNumber, maxUsersOnPage).then(data => {

            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
            dispatch(isFetching(false));

        })
    }
};
export const follow = (userId) => {
    return (dispatch) => {

        dispatch(isFollowing(true, userId));

        UserAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowAccept(userId))
            }
            dispatch(isFollowing(false, userId));
        })
    }
};
export const unfollow = (userId) => {
    return (dispatch) => {

        dispatch(isFollowing(true, userId));

        UserAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followAccept(userId))
            }
            dispatch(isFollowing(false, userId));
        })
    }
};

export default UsersReducer;