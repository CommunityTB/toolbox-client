import React, { Component } from 'react';
import ToolCard from './ToolCard'
import { AppContext } from '../AppProvider';

class ToolCardList extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => (
          value.state.tools.map(tool =>
            <ToolCard key={tool.id} {...tool} />
          )
        )}
      </AppContext.Consumer>
      
    );
  }
}

export default ToolCardList;