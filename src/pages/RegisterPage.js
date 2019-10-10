import React, { Component } from 'react'
import RegistrationForm from '../components/RegisterForm';


class RegisterPage extends Component {
  pushLogin = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <section className='Register-page'>
        <RegistrationForm onCreateNewUser={this.pushLogin} />
      </section>
    );
  }
}

export default RegisterPage;