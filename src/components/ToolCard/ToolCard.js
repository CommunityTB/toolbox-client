import React, {Component} from 'react';
import '../../styles/styles.css'

class ToolCard extends Component {
  render() {
    const { name, availability, imageURL } = this.props
    const availabilityStatus = availability ? 'Available for check-out' : 'Not available for check-out'
    return (
      <div className="toolCard">
        <img alt="tool name" src={imageURL} />
        <h4>{name}</h4>
        <p>{availabilityStatus}</p>
        <a href="/">Reserve This Item</a>
      </div>
    );
  }
}

export default ToolCard;
