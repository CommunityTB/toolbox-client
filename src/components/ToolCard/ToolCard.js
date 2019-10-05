import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircle } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/styles.css';


class ToolCard extends Component {
  render() {
    const t = this.props
    const url = `https://res.cloudinary.com/tooltimeshare/image/upload/tools/${t.tool_img_filename}`;
    const toolPageLink = `/tools/${t.id}`
    // const availabilityStatus = availability ? 'Available for check-out' : 'Not available for check-out'
    return (
      <div className="tool-card">
        <img alt={t.tool_img_alt} src={url} />
        <h3 className="fancy-titles">{t.tool_name}</h3>
        <div className="tool-card-info">
          <div className="availability"><FontAwesomeIcon icon={faCircle} /><span className="" to={toolPageLink}>Available</span></div>
          <div className="reserve-link"><FontAwesomeIcon icon={faPlus} /><Link className="" to={toolPageLink}>Details</Link></div>
        </div>
      </div>
    );
  }
}

export default ToolCard;
