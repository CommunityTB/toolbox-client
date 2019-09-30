import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../components/AppProvider';

class ToolDetail extends Component {
  render() {
    let urlToolId = this.props.match.params.toolId
    return (
      <AppContext.Consumer>
        {value => {
          const thisTool = value.state.tools.find(tool => {
            return tool.id.toString() === urlToolId.toString()
          })
          if (thisTool) {
            const url = `https://res.cloudinary.com/tooltimeshare/image/upload/tools/${thisTool.tool_img_filename}`;
            return (
              <div className="tool-detail">
                <img alt={thisTool.tool_img_alt} src={url} />
                <div className="tool-detail-text">
                  <h3 className="tool-name">{thisTool.tool_name}</h3>
                  <p>{thisTool.tool_desc}</p>
                  <button className="reserve-tool-btn">Reserve Tool</button>
                  <Link className="keep-browsing" to='/'>Keep Browsing</Link>
                </div>
              </div>              
            )
          }
          return <p>Something went wrong...</p>
        }}
      </AppContext.Consumer>
    )
  }
}


export default ToolDetail;