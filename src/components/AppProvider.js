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
    myCheckedOutTools: [], // THIS SHOULD BE EMPTY []
    myBasket: [], // THIS SHOULD BE EMPTY []
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

  registerUser = (user) => {
    UserApiService.registerUser(user)
      .then(newUserObj => {
        return newUserObj.json()
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  reserveTool = (toolId) => {
    //console.log(`This should reserve tool ${toolId}. TODO: Update user-api-service.js to make the API call and complete the reserve action.`)
    if(this.state.myBasket.includes(toolId)) {
      console.log(`Tool ${toolId} is already in your basket`)
    } else {
      let updatedBasket = this.state.myBasket
      updatedBasket.push(toolId)
      this.setState({
        myBasket: updatedBasket
      }, console.log(`Basket now contains: ${this.state.myBasket}`))
    }
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
            handleLoginSuccess: this.handleLoginSuccess,
            reserveTool: this.reserveTool,
            registerUser: this.registerUser
          },
        }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppProvider