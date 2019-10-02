import React, { Component } from 'react';
import { API_BASE_URL } from '../config';

export const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    error: null,
    tools: [],
  }

  componentDidMount = () => {
    fetch(`${API_BASE_URL}/tools`, {
      method: 'GET',
      // headers: {
      //   'content-type': 'application/json',
      //   'Authorization': `Bearer ${config.API_KEY}`
      // }
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
            reserveTool: (toolId) => {
              alert(`This should reserve tool ${toolId}. TODO: Update AppProvider.js to make the API call.`)
            },
            registerUser: (newUser) => {
              console.log('TODO: Create a new user with these properties:\n', newUser)
              /* POST to the API /users endpoint */
              /*
                user_name TEXT NOT NULL UNIQUE,
                user_password TEXT NOT NULL,
                email TEXT NOT NULL,
                first_name TEXT NOT NULL,
                last_name TEXT NOT NULL,
              */
            }
          },
        }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppProvider