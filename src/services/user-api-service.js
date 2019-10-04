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
    registerUser(u) {
        return fetch(`${API_BASE_URL}/users`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(u)
          // body data type must match "Content-Type" header)
        })
        .then(response => {
          if (!response.ok) {
            return response.json().then(e => Promise.reject(e));
          }
          return response.json()
        })
      }    
}

export default UserApiService;