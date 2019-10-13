import React from 'react';
import ToolDetail from '../pages/ToolDetail';
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom';
import history from '../history';


it.skip('renders without crashing', () => {
   const div = document.createElement('div');
   const match = {
      params: {
         toolId: 1
      }
   }
   ReactDOM.render(<Router history={history} ><ToolDetail match={match} /></Router>, div);
   ReactDOM.unmountComponentAtNode(div);
 });
