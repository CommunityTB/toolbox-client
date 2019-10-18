import { API_BASE_URL, REACT_APP_USER_ID_KEY } from '../config'
import TokenService from './token-service'

const UserApiService = {
    getUser(userId) {
        return fetch(`${API_BASE_URL}/users/${userId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }
                return res.json()
            })
    },
    getCurrentUser() {
        let userId = window.localStorage.getItem(REACT_APP_USER_ID_KEY)
        return userId
    },
    setCurrentUser(userId) {
        window.localStorage.setItem(REACT_APP_USER_ID_KEY, userId)
    },
    forgetUser() {
        window.localStorage.removeItem(REACT_APP_USER_ID_KEY)
    },
}

export default UserApiService;