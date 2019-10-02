import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../components/AppProvider';


class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: `First Name`,
      last_name: `Last Name`,
      user_password: `********`,
      email: `your-email@example.com`,
      user_name: `your-username`
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
    const { first_name, last_name, user_name, user_password, email } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="form-section">
        <div className="label-holder"><label htmlFor="first-name">First Name</label></div>
        <input className="form-input-field" id="first-name" type="text" name="firstName" placeholder={first_name} onChange={this.handleChange} required />
      </div>

      <div className="form-section">
        <div className="label-holder"><label htmlFor="last-name">Last Name</label></div>
        <input className="form-input-field" id="last-name" type="text" name="lastName" placeholder={last_name} onChange={this.handleChange} required />
      </div>

      <div className="form-section">
        <div className="label-holder"><label htmlFor="email">Email</label></div>
        <input className="form-input-field" id="email" type="text" name="email" placeholder={email} onChange={this.handleChange} required />
      </div>

      <div className="form-section">
        <div className="label-holder"><label htmlFor="user-name">Username</label></div>
        <input className="form-input-field" id="user-name" type="text" name="userName" placeholder={user_name} onChange={this.handleChange} required />
      </div>

      <div className="form-section">
        <div><label htmlFor="password">Password</label></div>
        <input className="form-input-field" id="password" type="password" name="password" placeholder={user_password} onChange={this.handleChange} required />
      </div>

      <button type="submit">Submit</button>
      <Link className="cancel-action" to='/'>Cancel</Link>
    </form>
    )
  }
}

export default RegisterForm;