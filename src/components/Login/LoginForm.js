import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import { Button, Input } from '../../helpers/Helpers';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = event => {
    event.preventDefault();
    const { user_name, user_password } = event.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      user_password: user_password.value,
    })
    .then(response => {
      user_name.value=''
      user_password.value=''
      TokenService.saveAuthToken(response.authToken)
      this.props.onLoginSuccess(response.userId)
    })
    .catch(response => {
      this.setState({ error: response.error})
    })
  }

  render() {
    const { error } = this.state;
    return(
      <section>
        <div className='form-space'>
          <form 
            className='login-form'
            onSubmit={this.handleSubmitJwtAuth}
          >
            <legend className='page-title'>Login</legend> 
            <label htmlFor='user_name' className='user-name'>Username</label>
            <Input
                type='text' 
                id='user_name'
                name='userName' 
                required>
            </Input> 
            
            <label htmlFor='user_password' className='user-password'>Password</label>       
            <Input   
              type='password' 
              id='user_password'
              name='user_password' 
              required>
            </Input>   
            
            <Button type='submit' className='login-button'>
                Login
            </Button>

            <Link className="cancel-action" to='/'>Cancel</Link>
            <Link className="cancel-action" to='/register'>Need an account?</Link>
            <div role='alert'>
              {error && <p className='red-error'>{error}</p>}
            </div>
          </form>
        </div>
    </section>
    )
  }
}

