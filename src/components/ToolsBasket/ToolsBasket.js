import React, { Component } from 'react';
import BasketItem from './BasketItem';
import { AppContext } from '../AppProvider';
import ToolBoxMap from '../ToolBoxMap/ToolBoxMap'


class ToolsBasket extends Component {
  state = {
    completedCheckout: false
  }
  checkout(toolIds) {
    console.log("Doesn't do anything yet, but should reserve tool IDs: ", toolIds)
    this.setState({
      completedCheckout: true
    })
  }
  render() {
    // let thing = 'hello'
    // if(this.state.tabNumber === 1) thing = 'goodbye'

    return (
      <section className="tools-basket">
        {/* <div><a href="/" onClick={(e) => this.handleClick(e, 0)}>My Basket</a> | <a href="/" onClick={(e) => this.handleClick(e, 1)}>Current Checkouts</a></div>
        <p>{thing}</p> */}
        <AppContext.Consumer>
          {
            value => {
              const { tools, myBasket } = value.state
              const { completedCheckout } = this.state
              const sectionHeader = completedCheckout ? 'Reserved for Pick-Up' : 'My Basket'
              if (myBasket.length && tools.length) {
                const basketOfTools = []
                myBasket.forEach(id => {
                  let item = tools.find(t => t.id === id)
                  basketOfTools.push(item)
                })
                return (
                  <div>
                    <h3>{sectionHeader}</h3>
                    {basketOfTools.map(t => <BasketItem key={t.id} tool={t} />)}
                    {!completedCheckout && <button className="checkout-btn" onClick={() => this.checkout(myBasket)}>Check Out</button>}
                    {completedCheckout && <ToolBoxMap />}
                  </div>
                )
              }
              return (
                <div>
                  {sectionHeader}
                  <p className="no-items"><em>Your basket is empty</em></p>
                </div>
                )
            }
          }
        </AppContext.Consumer>
      </section>
    );
  }
}

export default ToolsBasket;