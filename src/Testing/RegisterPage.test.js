import React from 'react'
import RegisterPage from '../pages/RegisterPage';
import { BrowserRouter } from 'react-router-dom'


it.skip('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<BrowserRouter><RegisterPage /></BrowserRouter>, div);
   ReactDOM.unmountComponentAtNode(div);
});
