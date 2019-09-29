import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/styles.css'

class ToolCard extends Component {
  render() {
    const t = this.props
    const url = `https://res.cloudinary.com/tooltimeshare/image/upload/tools/${t.tool_img_filename}`;
    const toolPageLink = `/tools/${t.id}`
    // const availabilityStatus = availability ? 'Available for check-out' : 'Not available for check-out'
    return (
      <div className="tool-card">
        <img alt={t.tool_img_alt} src={url} />
        <h4>{t.tool_name}</h4>
        <p>{t.tool_desc}</p>
        {/* <p>{availabilityStatus}</p> */}
        <Link className="whatever" to='/'>Reserve This Item</Link>
        <br />
        <Link className="reserve-link" to={toolPageLink}>View Details</Link>              
      </div>
    );
  }
}

export default ToolCard;
