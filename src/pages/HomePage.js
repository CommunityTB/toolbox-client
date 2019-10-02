import React, { Component } from 'react';
import ToolCardList from '../components/ToolCard/ToolCardList';
import Header from '../components/Header'


class HomePage extends Component {

    render() {
        console.log(this.props)
        return (
            <div className='HomePage'>
                <Header />
                <ToolCardList />
            </div>
        )
    }
}

export default HomePage