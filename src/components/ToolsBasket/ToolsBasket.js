import React, { Component } from 'react';
import BasketItem from './BasketItem';
import { AppContext } from '../AppProvider';


class ToolsBasket extends Component {
  checkout(toolIds) {
    alert("This doesn't do anything yet.", toolIds)
    console.log("Reserve tool IDs: ", toolIds)
  }
  render() {
    return (
      <section className="tools-basket">
        <AppContext.Consumer>
          {
            value => {
              const { tools, myBasket } = value.state
              const sectionHeader = <h3>My Basket</h3>
              if (myBasket.length && tools.length) {
                const basketOfTools = []
                myBasket.forEach(id => {
                  let item = tools.find(t => t.id === id)
                  basketOfTools.push(item)
                })
                return (
                  <div>
                    {sectionHeader}
                    {basketOfTools.map(t => <BasketItem key={t.id} tool={t} />)}
                    <button className="checkout-btn" onClick={() => this.checkout(myBasket)}>Check Out</button>
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