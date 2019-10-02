import React, { Component } from 'react'
import RegistrationForm from '../components/RegisterForm';


class RegisterPage extends Component {
  getBack = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <RegistrationForm onCreateNewUser={this.getBack} />
    );
  }
}

export default RegisterPage;