import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import AppProvider from './components/AppProvider';
import AppRouter from './components/AppRouter';
import history from './history.js';
import './assets/css/reset.css'


ReactDOM.render(
    <Router history={history}>
        <AppProvider>
            <AppRouter />
        </AppProvider>
    </Router>,    
    document.getElementById('root')
);


