import React, { Component } from 'react';
import ToolsBasket from '../components/ToolsBasket/ToolsBasket'
import CurrentCheckouts from '../components/CurrentCheckouts/CurrentCheckouts'

class MyToolsPage extends Component {

  state = {
    basketView: true,
    tab1: 'mytools-tab-active',
    tab2: 'mytools-tab-inactive'
  }

  handleClick = (e, option) => {
    e.preventDefault();
    if(option === 1 && this.state.basketView) {
      this.setState({
        basketView: false,
        tab1: 'mytools-tab-inactive',
        tab2: 'mytools-tab-active'
      })
    }

    if(option === 0 && !this.state.basketView) {
      this.setState({
        basketView: true,
        tab1: 'mytools-tab-active',
        tab2: 'mytools-tab-inactive'
      })
    }
  }

  render() {
    const { basketView, tab1, tab2 } = this.state
    return (
      <>
      <header className="my-tools-header">
        <h2>My Tools</h2>
        <div className="tabs">
          <a href="/" onClick={(e) => this.handleClick(e, 0)}><span className={tab1}>Toolbox</span></a>
          <a href="/" onClick={(e) => this.handleClick(e, 1)}><span className={tab2}>Current Checkouts</span></a>
        </div>
      </header>
        {
          ( basketView ? <ToolsBasket /> : <CurrentCheckouts /> )
        }
      </>
    );
  }
}

export default MyToolsPage;
