import React, { Component } from 'react';
import AutoCompleteWrap from '../components/AutoComplete/AutoCompleteWrap';
import hero from '../assets/images/hero_bg.png';
import '../assets/css/styles.css'

export default class Header extends Component {

    render() {
        return(
            <header>
                <img src={hero} alt='Community Toolbox Hero' className='hero'></img>
                <div className='middle-align'>
                    <h1 className='top-title'>THE COMMUNITY</h1>
                    <h1 className='bottom-title'>TOOLBOX</h1>
                    <AutoCompleteWrap sendUpToolIDs={this.props.sendUpToolIDs} />
                </div>
            </header>
        )
    }

}

