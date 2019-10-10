import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../components/AppProvider';
import { Button, Input } from '../helpers/Helpers';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: `First Name`,
      last_name: `Last Name`,
      user_password: `********`,
      email: `your-email@example.com`,
      user_name: `your-username`,
      // error: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static contextType = AppContext

  handleSubmit(e) {
    e.preventDefault()
    const newUser = {
      first_name: e.target['firstName'].value,
      last_name: e.target['lastName'].value,
      email: e.target['email'].value,
      user_name: e.target['userName'].value,
      user_password: e.target['password'].value,
    }

    this.context.actions.registerUser(newUser)
    this.props.onCreateNewUser()
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='form-space'>
        <form onSubmit={this.handleSubmit} className="register-form">
          
            <legend className='page-title'>Register</legend> 
            <label htmlFor="first-name" className="first-name">First Name</label>
            <Input 
              className="form-input-field" 
              id="first-name" 
              type="text" 
              name="firstName" 
              onChange={this.handleChange} 
              required 
            />
        
            <label htmlFor="last-name" className="last-name">Last Name</label>
            <Input 
              className="form-input-field" 
              id="last-name" 
              type="text" 
              name="lastName" 
              onChange={this.handleChange} 
              required 
            />
        
            <label htmlFor="email" className="email">Email</label>
            <Input 
              className="form-input-field" 
              id="email" 
              type="text" 
              name="email" 
              onChange={this.handleChange} 
              required 
            />
          
            <label htmlFor="user-name" className="user-name">Username</label>
            <Input 
              className="form-input-field" 
              id="user-name" 
              type="text" 
              name="userName" 
              onChange={this.handleChange} 
              required 
            />
          
            <label htmlFor="password" className="user-password">Password</label>
            <Input 
              className="form-input-field" 
              id="password" 
              type="password" 
              name="password" 
              onChange={this.handleChange} 
              required 
            />
          
            <Button type="submit" className="register-button">
              Submit
            </Button>
            
            <Link className="cancel-action" to='/'>
              Cancel
            </Link>
        {/* <div role='alert'>
          {error && <p className='red-error'>{error}</p>}
        </div> */}
      </form>
    </div>
    )
  }
}

export default RegisterForm;