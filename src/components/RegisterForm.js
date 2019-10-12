import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '../helpers/Helpers';
import AuthApiService from '../services/auth-api-service';

class RegisterForm extends Component {

  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = event => {
    event.preventDefault()
    const { first_name, last_name, email, user_name, user_password } = event.target
    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      user_name: user_name.value,
      user_password: user_password.value
    })
    .then( () => {
      first_name.value = ''
      last_name.value = ''
      email.value = ''
      user_name.value = ''
      user_password.value = ''
      this.props.onRegistrationSuccess()
    })
    .catch( response => {
      this.setState({ error: response.error })
    }) 
  }


  render() {
    const { error } = this.state
    return (
      <div className='form-space'>
        <form onSubmit={this.handleSubmit} className="register-form">
          
            <legend className='page-title'>Register</legend> 
            <label htmlFor="first-name" className="first-name">First Name</label>
            <Input  
              type="text" 
              name="first_name"  
              required 
            />
        
            <label htmlFor="last-name" className="last-name">Last Name</label>
            <Input 
              type="text" 
              name="last_name" 
              required 
            />
        
            <label htmlFor="email" className="email">Email</label>
            <Input  
              type="text" 
              name="email" 
              required 
            />
          
            <label htmlFor="user-name" className="user-name">Username</label>
            <Input 
              type="text" 
              name="user_name" 
              required 
            />
          
            <label htmlFor="password" className="user-password">Password</label>
            <Input  
              type="password" 
              name="user_password" 
              required 
            />
          
            <Button type="submit" className="register-button">
              Submit
            </Button>
            
            <Link className="cancel-action" to='/'>
              Cancel
            </Link>

            <div role='alert'>
              {error && <p className='red-error'>{error}</p>}
            </div>
            <p className='password-instructions'>* Password must contain 1 uppercase letter, 1 lowercase letter, a number, and a special character </p>
      </form>
    </div>
    )
  }
}

export default RegisterForm;