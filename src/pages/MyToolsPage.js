import React, { Component } from 'react';
import ToolsBasket from '../components/ToolsBasket/ToolsBasket'
import CurrentCheckouts from '../components/CurrentCheckouts/CurrentCheckouts'

class MyToolsPage extends Component {

  state = {
  }

  render() {
    return (
      <>
        <h3>My Tools</h3>
        <ToolsBasket />
        <CurrentCheckouts />
      </>
    );
  }
}

export default MyToolsPage;
