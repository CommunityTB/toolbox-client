import React from 'react';
import ReactDOM from 'react-dom';
import ToolsBasket from '../components/ToolsBasket/ToolsBasket'
import CurrentCheckouts from '../components/CurrentCheckouts/CurrentCheckouts'


it.skip('CurrentCheckouts renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<CurrentCheckouts/>, div);
   ReactDOM.unmountComponentAtNode(div);
});

it.skip('ToolsBasket renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToolsBasket/>, div);
  ReactDOM.unmountComponentAtNode(div);
});