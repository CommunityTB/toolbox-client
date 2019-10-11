import React from 'react';
import ReactDOM from 'react-dom';
import ToolCardList from '../components/ToolCard/ToolCardList';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom'



it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<BrowserRouter><Header/></BrowserRouter>, div);
   ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ToolCardList/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});