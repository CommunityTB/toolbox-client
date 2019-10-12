import React, { Component } from 'react';
import BasketItem from './BasketItem';
import { AppContext } from '../AppProvider';
import ToolBoxMap from '../ToolBoxMap/ToolBoxMap';


class ToolsBasket extends Component {
  static contextType = AppContext
  state = {
    completedCheckout: false,
    reservedItems: []
  }
  handleClick(e, toolIds) {
    e.preventDefault();
    this.context.actions.checkOut(toolIds)
    let reservedItems = toolIds.slice()
    this.setState({
      completedCheckout: true,
      reservedItems: reservedItems
    })
  }
  render() {
    return (
      <div className="tools-basket">
        <AppContext.Consumer>
          {
            value => {
              const { tools, myBasket } = value.state
              const { completedCheckout, reservedItems } = this.state
              const items = completedCheckout ? reservedItems : myBasket.slice()
              const listHeader = completedCheckout ? <h3>Reserved for Pick-Up</h3> : <h3>My Toolbox</h3>
              if (items.length && tools.length) {
                const basketOfTools = []
                items.forEach(id => {
                  let item = tools.find(t => t.id === id)
                  basketOfTools.push(item)
                })
                return (
                  <div>
                    {listHeader}
                    {basketOfTools.map(t => <BasketItem key={t.id} tool={t} checkoutStatus={completedCheckout} />)}
                    {!completedCheckout && <button className="checkout-btn" onClick={(e) => this.handleClick(e, myBasket)}>Check Out</button>}
                    {completedCheckout &&
                      <div className="pickup-info">
                        <div className="instructions">
                          <h3 className="next-steps-header">Next Steps</h3>
                          <p>
                            <span className="pickup-step">1.</span>
                            {' '}
                            Bring your ID (state ID, passport, photo id work badge)
                          </p>

                          <p>
                            <span className="pickup-step">2.</span>
                            {' '}
                            Bring cash or debit/credit card to join if you aren't already a member of the co-op (if planning on sliding scale or volunteer hours please bring proof of income in the form of two recent paystubs or direct deposit proof of income.)
                          </p>

                          <p>
                            <span className="pickup-step">3.</span>
                            {' '}
                            Go through safety checklist with staff member
                          </p>

                          <p>
                            <span className="pickup-step">4.</span>
                            {' '}
                            Checkout your tool(s) and get to work!
                          </p>

                        </div>
                        <ToolBoxMap />
                      </div>
                    }
                  </div>
                )
              }
              return (
                <div>
                  {listHeader}
                  <p className="no-items"><em>Your toolbox is empty</em></p>
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