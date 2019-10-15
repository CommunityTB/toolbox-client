import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import AppProvider from './components/AppProvider';
import AppRouter from './components/AppRouter';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import history from './history.js';
import './assets/css/reset.css'


ReactDOM.render(
    <Router history={history}>
      <ScrollToTop>
        <AppProvider>
            <AppRouter />
        </AppProvider>
      </ScrollToTop>
    </Router>,    
    document.getElementById('root')
);


