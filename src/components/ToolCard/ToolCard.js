import React, {Component} from 'react';
import '../../assets/css/styles.css'

class ToolCard extends Component {
  render() {
    const t = this.props
    const url = `https://res.cloudinary.com/tooltimeshare/image/upload/tools/${t.tool_img_filename}`;
    // const availabilityStatus = availability ? 'Available for check-out' : 'Not available for check-out'
    return (
      <div className="toolCard">
        <img alt={t.tool_img_alt} src={url} />
        <h4>{t.tool_name}</h4>
        <p>{t.tool_desc}</p>
        {/* <p>{availabilityStatus}</p> */}
        <a href="/">Reserve This Item</a>
      </div>
    );
  }
}

export default ToolCard;
