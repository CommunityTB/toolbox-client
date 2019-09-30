import React, { Component } from 'react';
import AutoComplete from './AutoComplete'
import { AppContext } from '../AppProvider';

class AutoCompleteWrap extends Component {
  constructor(props){
    super(props)
    this.state= {
      allTools: []
    }
  }
  render() {
    return (
      <div className="search-wrapper">
      <AppContext.Consumer>
        {value => (
            <AutoComplete suggestions={value.state.tools} />
        )}
      </AppContext.Consumer>
      </div>
    );
  }
}

export default AutoCompleteWrap;