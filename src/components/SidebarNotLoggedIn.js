
import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    return (
        <Menu pageWrapId={ 'page-wrap'} className='hide-menu' >
            <Link 
                to='/'
                onClick={this.handleUserLogout}
                onClick={() => this.closeMenu()}
            >
                Logout
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



