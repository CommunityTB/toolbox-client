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
          if(!toolsResponse.ok) {
            return toolsResponse.json().then(error => Promise.reject(error))
          }
          return toolsResponse.json()
        })
        .then((tools) => {
          this.setState({tools})
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
                value = {{
                    state: {
                        ...this.state
                        // passes state to other components
                    },
                    actions: {
                      
                    },
                }}>    
                {this.props.children}    
            </AppContext.Provider>
        )
    }
}

export default AppProvider