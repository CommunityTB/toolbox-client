import React, { Component } from 'react';
import RegistrationForm from '../components/RegisterForm';
import history from '../history';


class RegisterPage extends Component {
  pushLogin = () => {
    history.push('/login')
  }

  render() {
    return (
      <section className='Register-page'>
        <RegistrationForm onRegistrationSuccess={this.pushLogin} />
      </section>
    );
  }
}

export default RegisterPage;