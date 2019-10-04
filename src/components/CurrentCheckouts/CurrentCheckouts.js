import React, { Component } from 'react';
import { AppContext } from '../AppProvider';

class CurrentCheckouts extends Component {

  state = {
    // This is temporary. MyBasket should be
    // stored in app state and/or context
    myCheckedOutTools: [21, 22, 23, 24]
  }

  render() {
    const { myCheckedOutTools } = this.state
    return (
      <div>
        <AppContext.Consumer>
          {
            value => {
              const { tools } = value.state
              if (myCheckedOutTools.length && tools.length) {
                const bunchOfTools = []
                myCheckedOutTools.forEach(id => {
                  let item = tools.find(t => t.id === id)
                  bunchOfTools.push(item)
                })
                return (
                  <div>
                    ________________________________
                    <h4>Current Checkouts</h4>
                    {bunchOfTools.map(t => <p key={t.id}>&nbsp;| {t.tool_name}</p>)}
                  </div>
                )
              } else {
                return (
                  <div>
                    ________________________________
                    <h4>Current Checkouts</h4>
                    <p>&nbsp;| No items checked out</p>
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

export default CurrentCheckouts;