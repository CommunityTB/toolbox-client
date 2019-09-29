import React, { Component } from 'react';
import ToolCard from './ToolCard'
import { AppContext } from '../AppProvider';

class ToolCardList extends Component {
  render() {
    return (
      <div className="tool-card-wrapper">
      <AppContext.Consumer>
        {value => (
          value.state.tools.map(tool =>
            <ToolCard key={tool.id} {...tool} />
          )
        )}
      </AppContext.Consumer>
      </div>
    );
  }
}

export default ToolCardList;