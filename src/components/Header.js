import React, { Component } from 'react';
import AutoCompleteWrap from '../components/AutoComplete/AutoCompleteWrap';
import hero from '../assets/images/hero_bg.png';

export default class Header extends Component {

    render() {
        return(
            <header>
                <img src={hero} alt='Community Toolbox Hero' className='hero'></img>
                <AutoCompleteWrap />
            </header>
        )
    }

}

