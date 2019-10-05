import React, { Component } from 'react';
import whiteLogo from '../assets/images/ct_logo_white.svg';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export default class Footer extends Component {

    render() {
        return(
            <footer>
                <img src={whiteLogo} alt='White Community Toolbox Logo' className='footer-logo' />
                <div className='login-footer'>
                    <Link
                        className='white-link'
                        to='/login'>
                        Login    
                    </Link>
                </div>
                <div className='register-footer'>
                    <Link
                        className='white-link' 
                        to='/register'>
                        Register
                    </Link>
                </div>
                <div className='inventory-footer'>
                    <Link 
                        className='white-link'
                        to='/about'>
                        How It Works   
                    </Link>
                </div>
                <address>
                    1234 Tooltime Rd.<br/> 
                    Timothy, California, 97123
                </address>
                <p className='copyright'><FontAwesomeIcon icon={faCopyright} className='copyright-symbol'/>2019</p>
            </footer>
        )
    }

}