import React, { Component } from 'react';
import UserApiService from '../services/user-api-service';
import BasketService from '../services/basket-service';
import history from '../history';
import ToolsApiService from '../services/tools-api-service';
import TokenService from '../services/token-service';

export const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    error: null,
    tools: [],
    user: {},
    myBasket: [], // [21, 22] THIS SHOULD BE EMPTY BY DEFAULT
    myCheckedOutTools: [], // THIS SHOULD BE EMPTY BY DEFAULT
    isLoggedIn: false,
    menuOpen: false
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
    this.retrieveUserInfo(userId)
  }

  // Get all of the tools in the database and update
  // application state
  retrieveTools = () => {
    ToolsApiService.getAllTools()
      .then((tools) => {
        this.setState({ tools })
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      })
  }

  // Find out if this user has items already checked out
  retrieveUserInfo = (userId) => {
      ToolsApiService.getUserTools(userId)
        .then((checkedOutToolIds) => {
          let myCheckedOutTools = checkedOutToolIds.map(item => item.tool_id)
          this.setState({ myCheckedOutTools })
        })
        .catch(err => {
          this.setState({
            error: err.message
          }, console.log(`Error retrieving ${userId}'s tools:`, err));
        })
  }

  // We check login status onComponentDidMount, whenever
  // user visits the app. See if they've previously logged
  // in. If so, set user in app state. Then find out if
  // this user has items already checked out.
  checkLoginStatus = () => {
    if (TokenService.hasAuthToken()) {
      const userId = UserApiService.getCurrentUser()
      this.handleLoginSuccess(userId)
      this.retrieveUserInfo(userId)
    }
  }

  addToBasket = (toolId) => {
    if (this.state.myBasket.includes(toolId)) {
      // console.log(`Tool ${toolId} is already in your basket`)
    } else {
      let updatedBasket = this.state.myBasket
      updatedBasket.push(toolId)
      this.setState({
        myBasket: updatedBasket
      })
      BasketService.addItemToBasket(toolId)
    }
  }

  removeFromBasket = (toolId) => {
    if (this.state.myBasket.includes(toolId)) {
      let updatedBasket = this.state.myBasket.filter(item => {
        return item !== toolId
      })
      this.setState({
        myBasket: updatedBasket
      })
      BasketService.removeItemFromBasket(toolId)
    }
  }

  checkOut = (toolIds) => {
    // this function will aready contain myBasket. Map the user ID and tool
    // ids into an object to push into the checkoutTools function below
    const userId = this.state.user.id;

    let myBasketArrOfObjs = [];
    toolIds.forEach(tool => {
      myBasketArrOfObjs.push(
        {
          tool_id: tool,
          user_id: userId
        }
      )
    })
    // send newly creeated object of tool_ids and user_id to server to store the data
    ToolsApiService.checkoutTools(myBasketArrOfObjs)
      .then(newlyCheckedoutTools => {
        let listOfCheckedOutTools = this.state.myCheckedOutTools
        listOfCheckedOutTools.push(...newlyCheckedoutTools)
        this.setState({
          myBasket: [],
          myCheckedOutTools: listOfCheckedOutTools
        })
      }
      )
      .then(() => {
        this.retrieveTools()
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
    BasketService.clearBasket()
  }

  componentDidMount = () => {
    let itemsInBasket = BasketService.getBasket()
    let myBasket = itemsInBasket.map(item => parseInt(item))
    this.retrieveTools()
    this.setState({
      myBasket
    }, this.checkLoginStatus())
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
            addToBasket: this.addToBasket,
            removeFromBasket: this.removeFromBasket,
            checkOut: this.checkOut,
          },
        }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppProvider
