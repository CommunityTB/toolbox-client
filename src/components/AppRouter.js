import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import NotFoundPage from '../../pages/NotFoundPage';

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
                    {this.state.errorPresent && <p className='Error-message'>We have an error! Please try again!</p>}
                    <Switch>
                        <Route 
                            exact
                            path={'/'}
                            component={HomePage}
                        />
                        <Route 
                            path={'/login'}
                            component={LoginPage}
                        />
                        <Route 
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

export default AppRouter;
