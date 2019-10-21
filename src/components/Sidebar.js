
import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { AppContext } from './AppProvider';


export default class Sidebar extends Component {
    static contextType = AppContext
    
    state = {
        menuOpen: false
    }
 

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    return (
        <Menu pageWrapId={ 'page-wrap'} className='hide-menu' isOpen={this.context.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}>
            <Link
                to='/login'
                onClick={() => this.closeMenu()}
            >
                Login  
            </Link>
            <Link
                className='link_space' 
                to='/register'
                onClick={() => this.closeMenu()}
            >
                Register
            </Link>
            <Link 
                className='link_space' 
                to='/'
                onClick={() => this.closeMenu()}
            >
                Tools
            </Link>
            <Link
                className='link_space' 
                to='/about'
                onClick={() => this.closeMenu()}
            >
                About
            </Link>
        </Menu>
    );
  }
}





