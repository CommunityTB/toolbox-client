import React, { Component } from 'react';
import ToolCardList from '../components/ToolCard/ToolCardList';
import AutoCompleteWrap from '../components/AutoComplete/AutoCompleteWrap'
import '../assets/css/HomePage.css'

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
            <div className="HomePage">
                <AutoCompleteWrap sendUpToolIDs={(ids) => this.updateToolIDs(ids)} />
                <ToolCardList toolIdListFiltered={this.state.toolIdListFiltered} />
            </div>
        )
    }
}

export default HomePage