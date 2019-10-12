import React from 'react';
import ReactDOM from 'react-dom';
import ToolCardList from '../components/ToolCard/ToolCardList';
import Header from '../components/Header';
import { Router } from 'react-router-dom'
import HomePage from '../Pages/HomePage'

describe('HomePage', () => {

it.skip('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<Router><Header /></Router>, div);
   ReactDOM.unmountComponentAtNode(div);
});

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><ToolCardList/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});

});