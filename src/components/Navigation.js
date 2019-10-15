import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';
import logo from '../assets/images/ct_logo_color.svg';
import cart from '../assets/images/toolbox_cart_checkout.svg';
import TokenService from '../services/token-service'
import BadgeCounter from './BadgeCounter/BadgeCounter';
import history from '../history';
import { AppContext } from './AppProvider';
import { slide as Menu } from 'react-burger-menu';


export default class Navigation extends Component {
    
    static contextType = AppContext

    handleUserLogout = () => {
        TokenService.clearAuthToken()
        history.push('/')
        window.location.reload()
    }

    renderLoginLinks = () => {
        return (
            <>
                <Menu pageWrapId={ 'page-wrap'} className='hide-menu' isOpen={ true }>
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
                        to='/'>
                        Tools
                    </Link>
                    <Link
                        className='link_space' 
                        to='/about'>
                        About
                    </Link>
                </Menu>
                <ul className='nav-not-logged-in-desktop'>
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
                        to='/'>
                        Tools
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
            <>
                <Menu pageWrapId={ 'page-wrap'} className='hide-menu' isOpen={ true }>
                    <Link 
                        to='/'
                        onClick={this.handleUserLogout}
                        >
                        Logout
                    </Link>
                    <Link 
                        className='link_space' 
                        to='/'>
                        Tools
                    </Link>
                    <Link
                        className='link_space' 
                        to='/about'>
                        About
                    </Link> 
                </Menu>
                <Link
                    className='mobile-cart' 
                    to='/mytools'>
                    <img src={cart} className="mobile-cart-icon" alt="cart" /><BadgeCounter count={this.context.state.myBasket.length > 0 && <span>{this.context.state.myBasket.length}</span>} />
                </Link>
                <ul className='nav-logged-in-desktop'>
                    <Link 
                        to='/'
                        onClick={this.handleUserLogout}
                        >
                        Logout
                    </Link>
                    <Link 
                        className='link_space' 
                        to='/'>
                        Tools
                    </Link>
                    <Link
                        className='link_space' 
                        to='/about'>
                        About
                    </Link>
                    <Link
                        className='link_space' 
                        to='/mytools'>
                        <img src={cart} className="cart-icon" alt="cart" /><BadgeCounter count={this.context.state.myBasket.length > 0 && <span>{this.context.state.myBasket.length}</span>} />
                    </Link>
                </ul>
            </>
        )
    }

    render() {
       
        return (
            <nav className ='nav'>
                <div><Link to='/'><img src={logo} className='logo' alt='Community Toolbox Logo'></img></Link></div>
                { TokenService.hasAuthToken() ? this.renderLogoutLinks() : this.renderLoginLinks() }
            </nav>
        )
    }
}