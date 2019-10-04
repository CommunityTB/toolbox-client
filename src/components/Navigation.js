import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';
import logo from '../assets/images/ct_logo_color.svg';
import TokenService from '../services/token-service'
import history from '../history';

export default class Navigation extends Component {

    handleUserLogout = () => {
        TokenService.clearAuthToken()
        history.push('/')
    }
    
    renderLoginLinks = () => {
        return (
            <>
                {/* <div class="hamburger">
                    <button class="hamburger"></button>
                    <button class="cross"></button>
                </div> */}
                <ul className='nav_not_logged_in'>
                    <Link
                        to='/login'>
                        Login    
                    </Link>
                    <Link
                        className='link_space' 
                        to='/register'>
                        Register
                    </Link>
                    <Link 
                        className='link_space'
                        to='/inventory'>
                        Inventory    
                    </Link>
                    <Link
                        className='link_space' 
                        to='/about'>
                        About
                    </Link>
                </ul>
            </>
        )
    }

    renderLogoutLinks = () => {
        return (
            <div className='nav_logged_in'>
                <Link to='/'
                        onClick={this.handleUserLogout}
                        >
                        Logout
                </Link>
            </div>
        )
    }

    render() {
       
        return (
            <nav className ='nav'>
                <div><Link to='/'><img src={logo} className='logo' alt='Community Toolbox Logo'></img></Link></div>
                <ul className='nav_items'>
                    { TokenService.hasAuthToken() ? this.renderLogoutLinks() : this.renderLoginLinks() }
                </ul>
            </nav>
        )
    }
}