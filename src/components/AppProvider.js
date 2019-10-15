import React, { Component } from 'react';
import UserApiService from '../services/user-api-service';
import BasketService from '../services/basket-service';
import history from '../history';
import ToolsApiService from '../services/tools-api-service';

export const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    error: null,
    tools: [],
    user: {},
    myBasket: [], // [21, 22] THIS SHOULD BE EMPTY BY DEFAULT
    myCheckedOutTools: [1, 2, 3], // THIS SHOULD BE EMPTY BY DEFAULT
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
    // this function will aready contain myBasket. Map the user ID and tool ids into an object to push into the checkoutTools function below
    const userId = this.state.user.id;
    
    let myBasketArrOfObjs = [];
    toolIds.map(tool => {
      myBasketArrOfObjs.push(
        {
          tool_id: tool,
          user_id: userId
        }
      )
    })
    // send newly creeated object of tool_ids and user_id to server to store the data
    ToolsApiService.checkoutTools(myBasketArrOfObjs)
      .then(newlyCheckedoutTools => 
        this.setState({
          myBasket: [],
          myCheckedOutTools: newlyCheckedoutTools
        }, console.log(`Emptied basket`))
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
            addToBasket: this.addToBasket,
            removeFromBasket: this.removeFromBasket,
            checkOut: this.checkOut
          },
        }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppProvider
