import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './index.css';
import AppRouter from './components/AppRouter/AppRouter'
import history from './history'
import App from './App';


ReactDOM.render(
    <Router history={history}>
        <AppRouter />
    </Router>,    
    document.getElementById('root')
);


