import React, { Component } from 'react';

class BasketItem extends Component {
  render() {
    const { tool } = this.props
    const imageUrl = `https://res.cloudinary.com/tooltimeshare/image/upload/w_48/tools/${tool.tool_img_filename}`;
    return (
      <div className="tool-line-item">
        <img src={imageUrl} alt={tool.tool_img_alt} />
        <div className="title">
          <p>{tool.tool_name}</p>
        </div>
      </div>
    );
  }
}

export default BasketItem;