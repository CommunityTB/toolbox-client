import { API_BASE_URL } from '../config'
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
}

export default UserApiService;