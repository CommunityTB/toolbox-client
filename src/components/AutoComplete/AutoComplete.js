import React, { Component } from "react";
import PropTypes from "prop-types";

export class AutoComplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)           //borrowed propTypes instance - makes it easier to reinitialize as an array.
  };
  static defaultProperty = {
    suggestions: []
  };
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
      filteredValues: [],
      filteredToolIDs: [],
      filteredResults: [],
      showDropdowns: false,
      parsed: false,
      userInput: ""
    };
  }

  onChange = e => {
    this.setState({ filteredResults: [], userInput: e.currentTarget.value }) //clears existing array of choices
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value
    
    let filtRes = suggestions.map(tool => {
      return {name: tool.tool_name, id: tool.id, category: tool.tool_category}
    })

    this.setState({filteredResults: filtRes})
    
    const filterList = this.state.filteredResults;  //deconstruction    
    const filteredValues = []
    const filteredToolIDs = []
    filterList.forEach(item => {
      let cat = item.category.toLowerCase()
      let name = item.name.toLowerCase()
      let searchTerm = userInput.toLowerCase()
      if(cat.includes(searchTerm) || name.includes(searchTerm)) {
        filteredValues.push(item.name)
        filteredToolIDs.push(item.id)
      }
    })
    
    this.setState({
      currentValue: 0,
      filteredValues,
      filteredToolIDs,
      showDropdowns: true,
    }, this.props.sendUpToolIDs(filteredToolIDs));
  };

  onClick = e => {      //submitting for results
    this.setState({
      currentValue: 0,
      filteredValues: [],
      filteredToolIDs: [],
      showDropdowns: false,
      userInput: e.currentTarget.innerText
    });
  };

  render() {
    const {
      onChange,
      onClick,
      state: {currentValue, filteredValues, showDropdowns, userInput}
    } = this;
    
    let listComponents;

    if (showDropdowns && userInput) {
      if (filteredValues.length) {
        listComponents = (
          <ul className="suggestions">
            {filteredValues.map((suggestion, index) => {
              let className;

              if (index === currentValue) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        listComponents = (
          <div className="no-suggestions">
            <em>No suggestions</em>
          </div>
        );
      }
    }
    return (
      <React.Fragment>   {/* Borrowed. didn't know how to send data back to app, and some dude online sent it using an input element. what do you know */}
        <input
          type="text"
          className="search-input"
          onChange={onChange}
          value={userInput}
          placeholder="ENTER A TOOL"
        />
        {listComponents}
      </React.Fragment>
    );
  }
}

export default AutoComplete;