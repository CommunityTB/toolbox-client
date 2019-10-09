import React, { Component } from 'react';
import ToolsBasket from '../components/ToolsBasket/ToolsBasket'
import CurrentCheckouts from '../components/CurrentCheckouts/CurrentCheckouts'

class MyToolsPage extends Component {

  state = {
    basketView: true,
    view1: 'mytools-tab-active',
    view2: 'mytools-tab-inactive'
  }

  handleClick = (e, option) => {
    e.preventDefault();
    let newBasketView = this.state.basketView ? false : true
    this.setState({
      basketView: newBasketView,
      view1: 'mytools-tab-inactive',
      view2: 'mytools-tab-active'
    })
  }

  render() {
    const { basketView, view1, view2 } = this.state
    return (
      <>
        <h2>My Tools</h2>
        <div><a href="/" onClick={(e) => this.handleClick(e, 0)}><span className={view1}>Basket</span></a> <a href="/" onClick={(e) => this.handleClick(e, 1)}><span className={view2}>Current Checkouts</span></a></div>
        {
          ( basketView ? <ToolsBasket /> : <CurrentCheckouts /> )
        }
      </>
    );
  }
}

export default MyToolsPage;
