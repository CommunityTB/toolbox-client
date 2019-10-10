import { API_BASE_URL } from '../config'

const ToolsApiService = {
    checkoutTools(myBasketObj) {
        return fetch(`${API_BASE_URL}/checkouts`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(myBasketObj)
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
                return res.json()
        })
    }   
}

export default ToolsApiService;