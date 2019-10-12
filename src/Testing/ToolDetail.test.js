import React from 'react';
import ToolDetail from '../pages/ToolDetail';
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom';
import history from '../history';
import {AppContext} from '../components/AppProvider'; 


it.skip('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(
      <Router history={history} ><ToolDetail /></Router>, div);
   ReactDOM.unmountComponentAtNode(div);
 });
