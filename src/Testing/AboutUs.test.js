import React from 'react';
import ReactDOM from 'react-dom';
import AboutUs from '../pages/AboutUs.js';
import { BrowserRouter } from 'react-router-dom'



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter> <AboutUs /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
