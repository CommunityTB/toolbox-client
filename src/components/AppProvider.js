import React, { Component } from 'react';
import UserApiService from '../services/user-api-service';
import { API_BASE_URL } from '../config';
import history from '../history';

export const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    error: null,
    tools: [],
    user: {},
    isLoggedIn: false,
  }

  handleLoginSuccess = (userId) => {
    UserApiService.getUser(userId)
      .then(user => this.setState({
        user, isLoggedIn: true
      }))
      .then(() => {
        history.push('/')
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  registerUser = (u) => {
    // console.log('TODO: Create a new user with these properties:\n', u)
    fetch(`${API_BASE_URL}/users`, {
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

  componentDidMount = () => {
    fetch(`${API_BASE_URL}/tools`, {
      method: 'GET',
    })
      .then((toolsResponse) => {
        if (!toolsResponse.ok) {
          return toolsResponse.json().then(error => Promise.reject(error))
        }
        return toolsResponse.json()
      })
      .then((tools) => {
        this.setState({ tools })
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      })
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          state: {
            ...this.state
            // passes state to other components
          },
          actions: {
            handleLoginSuccess: (userId) => {
              this.handleLoginSuccess(userId)
            },
            reserveTool: (toolId) => {
              alert(`This should reserve tool ${toolId}. TODO: Update AppProvider.js to make the API call.`)
            },
            registerUser: (newUser) => {
              this.registerUser(newUser)
            }
          },
        }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppProvider