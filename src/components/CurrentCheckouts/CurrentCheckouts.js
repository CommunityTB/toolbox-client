import React, { Component } from 'react';
import { AppContext } from '../AppProvider';

class CurrentCheckouts extends Component {
  render() {
    return (
      <section className="current-checkouts">
        <AppContext.Consumer>
          {
            value => {
              const { tools, myCheckedOutTools } = value.state
              const sectionHeader = <h3>Currently Checked Out</h3>
              if (myCheckedOutTools.length && tools.length) {
                const bunchOfTools = []
                myCheckedOutTools.forEach(id => {
                  let item = tools.find(t => t.id === id)
                  bunchOfTools.push(item)
                })
                return (
                  <div>
                    {sectionHeader}
                    {bunchOfTools.map(t => <p key={t.id}>{t.tool_name}</p>)}
                  </div>
                )
              }
              return (
                <div>
                  {sectionHeader}
                  <p className="no-items"><em>No items checked out</em></p>
                </div>
                )
            }
          }
        </AppContext.Consumer>
      </section>
    );
  }
}

export default CurrentCheckouts;