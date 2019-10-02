import React, { Component } from 'react';
import ToolCardList from '../components/ToolCard/ToolCardList';
import Header from '../components/Header'


class HomePage extends Component {
    state = {
        toolIdListFiltered: []
    }

    updateToolIDs(toolIDs) {
        this.setState({
            toolIdListFiltered: toolIDs
        })
    }

    render() {
        return (
            <div className='HomePage'>
                <Header />
                <ToolCardList />
            </div>
        )
    }
}

export default HomePage