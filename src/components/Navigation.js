import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';
import logo from '../assets/images/CT_logo_color.svg';

export default class Navigation extends Component {

    handleUserLogout = () => {

    }

    renderLoginLinks = () => {
        return (
            <div className='Nav_not_logged_in'>
                <Link
                    to='/login'>
                    Login    
                </Link>
                <Link 
                    to='/register'>
                    Register
                </Link>
                <Link 
                    to='/inventory'>
                    Inventory    
                </Link>
                <Link
                    to='/find_us'>
                    Find Us    
                </Link>
                <Link 
                    to='/about'>
                    About
                </Link>
            </div>
        )
    }

    renderLogoutLinks = () => {
        return (
            <div className='Nav_not_logged_in'>
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
            <nav className ='Nav'>
                <div><Link to='/'></Link></div>
            </nav>
        )
    }

}