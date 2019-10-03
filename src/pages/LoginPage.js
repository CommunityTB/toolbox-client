import React, { Component } from 'react';
import LoginForm from '../components/Login/LoginForm';
import { AppContext } from '../components/AppProvider';

class LoginPage extends Component {

  static contextType = AppContext;

    render() {
        return (
          <section className='Login-page'>
            <h1 className='page-title'>Login</h1>
            <LoginForm onLoginSuccess={this.context.actions.handleLoginSuccess}/>
          </section>
        );
    }
}

export default LoginPage;
