import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ToolDetail from '../pages/ToolDetail';
import Navigation from '../components/Navigation';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MyToolsPage from '../pages/MyToolsPage';
import Footer from '../components/Footer'
import AboutUs from '../pages/AboutUs';
import NotFoundPage from '../pages/NotFoundPage';
import PublicRoute from '../helpers/PublicRoute';
import PrivateRoute from '../helpers/PrivateRoute';

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
                <main>
                    {/* <div id='page-wrap'> */}
                    <Navigation />
                    {this.state.errorPresent && <p className='Error-message'>We have an error! Please try again!</p>}
                    <Switch>
                        <Route
                            exact
                            path={'/'}
                            component={HomePage}
                        />
                        <PrivateRoute 
                            path='/tools/:toolId' 
                            component={ToolDetail} 
                        />
                        <PublicRoute
                            path={'/login'}
                            component={LoginPage}
                        />
                        <PublicRoute
                            path={'/register'}
                            component={RegisterPage}
                        />
                        <PrivateRoute
                            path={'/mytools'}
                            component={MyToolsPage}
                        />
                        <Route
                            path={'/about'}
                            component={AboutUs}
                        />
                        <Route
                            component={NotFoundPage}
                        />
                    </Switch>
                    <Footer />
                    {/* </div> */}
                </main>
            </div>
        );
    }
}

export default AppRouter;
