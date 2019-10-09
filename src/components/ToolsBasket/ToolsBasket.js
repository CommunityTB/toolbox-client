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
    return (
      <div className="tools-basket">
        <AppContext.Consumer>
          {
            value => {
              const { tools, myBasket } = value.state
              const { completedCheckout } = this.state
              const listHeader = completedCheckout ? <h3>Reserved for Pick-Up</h3> : <h3>My Basket</h3>
              if (myBasket.length && tools.length) {
                const basketOfTools = []
                myBasket.forEach(id => {
                  let item = tools.find(t => t.id === id)
                  basketOfTools.push(item)
                })
                return (
                  <div>
                    {listHeader}
                    {basketOfTools.map(t => <BasketItem key={t.id} tool={t} checkoutStatus={completedCheckout} />)}
                    {!completedCheckout && <button className="checkout-btn" onClick={() => this.checkout(myBasket)}>Check Out</button>}
                    {completedCheckout && <div className="pickup-instructions">
                      <div>
                        <ul>
                          <li>Step 1: Sed ut perspiciatis unde omnis iste natus error sit.</li>
                          <li>Step 2: Voluptatem accusantium doloremque laudantium.</li>
                          <li>Step 3: Rem aperiam, eaque ipsa quae ab illo inventore.</li>
                        </ul>
                      </div>
                      <ToolBoxMap />
                      </div>}
                  </div>
                )
              }
              return (
                <div>
                  {listHeader}
                  <p className="no-items"><em>Your basket is empty</em></p>
                </div>
                )
            }
          }
        </AppContext.Consumer>
      </div>
    );
  }
}

export default ToolsBasket;