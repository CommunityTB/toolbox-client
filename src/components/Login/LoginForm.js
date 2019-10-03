import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './LoginForm.css';

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
        <form 
          className='login-form'
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>

          <div className='form-section'>
            <div className='label-holder'><label htmlFor='user_name'>Username</label></div>
            <input
                className='form-input-field'
                type='text' 
                id='user_name'
                name='userName' 
                placeholder='User name'
                required>
            </input> 
          </div>          

          <div className='form-section'>
            <div className='label-holder'><label htmlFor='user_password'>Password</label></div>       
            <input 
              className="form-input-field"    
              type='password' 
              id='user_password'
              name='user_password' 
              placeholder='user_password'
              required>
            </input>   
          </div>
           
          <button type='submit'>
              Login
          </button>
          <Link className="cancel-action" to='/'>Cancel</Link>
        </form>
    </section>
    )
  }
}

