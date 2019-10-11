import React, { Component } from 'react';
import { AppContext } from '../AppProvider';

class BasketItem extends Component {
  static contextType = AppContext

  handleClick = (e) => {
    e.preventDefault();
    console.log('Remove item id', this.props.tool.id)
    this.context.actions.removeFromBasket(this.props.tool.id)
  }

  render() {
    const { tool, checkoutStatus } = this.props
    const imageUrl = `https://res.cloudinary.com/tooltimeshare/image/upload/w_48/tools/${tool.tool_img_filename}`;
    const removeBtn = checkoutStatus ? null : <a href="/" onClick={(e)=>this.handleClick(e)}><span className="x-symbol">&#x2715;</span></a>
    return (
      <div className="tool-line-item">
        <div className="media">
          <img src={imageUrl} alt={tool.tool_img_alt} />
          <div className="title">
            <p>{tool.tool_name}</p>
          </div>
        </div>
        <div className="remove-from-basket">{removeBtn}</div>
      </div>
    );
  }
}

export default BasketItem;