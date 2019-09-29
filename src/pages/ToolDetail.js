import React, { Component } from 'react'
import { AppContext } from '../components/AppProvider'

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
                <h4>{thisTool.tool_name}</h4>
                <p>{thisTool.tool_desc}</p>
                {/* <p>{availabilityStatus}</p> */}
                <a href="/">Reserve This Item</a>
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