import React, { Component } from 'react'
import RegistrationForm from '../components/RegisterForm';


class RegisterPage extends Component {
  pushLogin = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <RegistrationForm onCreateNewUser={this.pushLogin} />
    );
  }
}

export default RegisterPage;