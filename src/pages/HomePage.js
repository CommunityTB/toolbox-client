import React, { Component } from 'react';
import ToolCardList from '../components/ToolCard/ToolCardList';
import AutoCompleteWrap from '../components/AutoComplete/AutoCompleteWrap'
import '../assets/css/HomePage.css'

class HomePage extends Component {

    render() {
        console.log(this.props)
        return (
            <div className="HomePage">
                    <AutoCompleteWrap />
                    <ToolCardList />
            </div>
        )
    }
}

export default HomePage