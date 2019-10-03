import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';
import logo from '../assets/images/ct_logo_color.svg';
// import history from '../history';

export default class Navigation extends Component {

    handleUserLogout = () => {
        // TokenService.clearAuthToken()
        // history.push('/')
    }

    renderLoginLinks = () => {
        return (
            <div className='nav_not_logged_in'>
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
                    to='/find_us'>
                    Find Us    
                </Link>
                <Link
                    className='link_space' 
                    to='/about'>
                    About
                </Link>
                <Link
                    className='link_space' 
                    to='/mytools'>
                    My Tools
                </Link>
            </div>
        )
    }

    // renderLogoutLinks = () => {
    //     return (
    //         <div className='nav_logged_in'>
    //             <Link to='/'
    //                     onClick={this.handleUserLogout}
    //                     >
    //                     Logout
    //             </Link>
    //         </div>
    //     )
    // }

    render() {
        return (
            <nav className ='nav'>
                <div><Link to='/'><img src={logo} className='logo' alt='Community Toolbox Logo'></img></Link></div>
                <ul className='nav_items'>
                    {this.renderLoginLinks()}
                    {/* { TokenService.hasAuthToken() ? this.renderLoginLinks() : this.renderLogoutLinks() } */}
                </ul>
            </nav>
        )
    }
}