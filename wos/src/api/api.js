import * as axios from "axios";

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "dc5d97df-20bf-4c17-91ab-40f49e3663ce"
    }
})

export const UserAPI = {
    getUsers(usersPageNumber, maxUsersOnPage) {
        return instans.get(`users?page=${usersPageNumber}&count=${maxUsersOnPage}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instans.delete(`follow/${userId}`)
    },

    unfollow(userId) {
        return instans.post(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method please use ProfileAPI object');
        return profileAPI.getProfile(userId);
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instans.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instans.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instans.put(`profile/status`, {status: status})
    },
}

export const AuthAPI = {
    me() {
        return instans.get(`auth/me`)
    }
}