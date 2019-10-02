import React, { Component } from 'react';
import ToolCard from './ToolCard'
import { AppContext } from '../AppProvider';

class ToolCardList extends Component {
  render() {
    return (
      <div className="tool-card-wrapper">
      <AppContext.Consumer>
        {
          value => {
            const toolsFiltered = value.state.tools.filter(item => this.props.toolIdListFiltered.includes(item.id))
            if(toolsFiltered.length) {
              return toolsFiltered.map(tool => <ToolCard key={tool.id} {...tool} />)
            }
            return value.state.tools.map(tool => <ToolCard key={tool.id} {...tool} />)
          }
        }
      </AppContext.Consumer>
      </div>
    );
  }
}

export default ToolCardList;