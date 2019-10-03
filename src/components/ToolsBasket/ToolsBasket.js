import React, { Component } from 'react';
import { AppContext } from '../AppProvider';

class ToolsBasket extends Component {

  state = {
    // This is temporary. MyBasket should be
    // stored in app state and/or context
    myBasket: [1, 2, 3, 4]
  }
  
  checkout(toolIds) {
    alert("This doesn't do anything yet.", toolIds)
    console.log("Reserve tool IDs: ", toolIds)
  }

  render() {
    const { myBasket } = this.state
    return (
      <div>
        <AppContext.Consumer>
          {
            value => {
              const { tools } = value.state
              if (myBasket.length && tools.length) {
                const basketOfTools = []
                myBasket.forEach(id => {
                  let item = tools.find(t => t.id === id)
                  basketOfTools.push(item)
                })
                return (
                  <div>
                    ________________________________
                    <h4>Basket</h4>
                    {basketOfTools.map(t => <p key={t.id}>&nbsp;| {t.tool_name}</p>)}
                    <button onClick={() => this.checkout(myBasket)}>Check Out</button>
                  </div>
                )
              } else {
                return (
                  <div>
                    ________________________________
                    <h4>Basket</h4>
                    <p>&nbsp;| Your basket is empty</p>
                  </div>
                )
              }
            }
          }
        </AppContext.Consumer>
      </div>
    );
  }
}

export default ToolsBasket;