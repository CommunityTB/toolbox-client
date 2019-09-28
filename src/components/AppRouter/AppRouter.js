import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

class AppRouter extends Component {

    state = {
        errorPresent: false
    }

    static getDerivedStateFromError(error) {
        console.error('Error:', error)
        return { errorPresent: true }
    }

    render() {
        return (
            <div className='AppRouter'>
                <header>

                </header>
                <main>
                    <Switch>
                        <PublicRoute 
                            exact
                            path={'/'}
                            component={HomePage}
                        />
                        <PublicRoute 
                            path={'/login'}
                            component={LoginPage}
                        />
                        <PublicRoute 
                            path={'/register'}
                            component={RegisterPage}
                        />
                        <Route 
                            component={NotFoundPage}
                        />
                    </Switch>
                </main>
            </div>
        );

    }

}


