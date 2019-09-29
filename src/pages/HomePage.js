import React, { Component } from 'react';
import ToolCardList from '../components/ToolCard/ToolCardList';
import '../assets/css/HomePage.css'

class HomePage extends Component {

    render() {
        return (
            <div className="HomePage">
                    <ToolCardList />
            </div>
        )
    }
}

export default HomePage