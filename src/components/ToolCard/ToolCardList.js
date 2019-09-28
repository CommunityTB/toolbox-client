import React, { Component } from 'react';
import ToolCard from './ToolCard'

class ToolCardList extends Component {
  render() {
    const { tools } = this.props
    return (
      tools.map(tool =>
        <ToolCard key={tool.id} availability={tool.availability} imageURL={tool.imageURL} name={tool.name} />
      )
    );
  }
}

export default ToolCardList;