const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURENT_PAGE = 'SET_CURENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING'

let initionalState = {
    users: [ ],
    totalUsersCount: 0,
    maxUsersOnPage: 10,
    usersPageNumber: 1,
    isFetching: false
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
        case SET_CURENT_PAGE: {
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
        case TOGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.toggle
            }
        }
        default:
            return state;

    }
};

export const followAC = (userId) => {
    return {type: FOLLOW, userId}
}
export const unfollowAC = (userId) => {
    return {type: UNFOLLOW, userId}
}
export const setUsersAC = (users) => {
    return {type: SET_USERS, users}
}
export const setCurentPageAC = (numberPage) => {
    return {type: SET_CURENT_PAGE, numberPage}
}
export const setUsersTotalCountAC = (totalUsers) => {
    return {type: SET_USERS_TOTAL_COUNT, totalUsers}
}
export const isFetchingAC = (toggle) => {
    return {type: TOGLE_IS_FETCHING, toggle}
}

export default UsersReducer;