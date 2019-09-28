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
      showDropdowns: false,
      userInput: ""
    };
  }

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    console.log(suggestions);

    const filteredValues = suggestions[0].filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      currentValue: 0,
      filteredValues,
      showDropdowns: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {      //submitting for results
    this.setState({
      currentValue: 0,
      filteredValues: [],
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
          <ul class="suggestions">
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
          <div class="no-suggestions">
            <em>No suggestions</em>
          </div>
        );
      }
    }

    return (
      <React.Fragment>   {/* Borrowed. didn't know how to send data back to app, and some dude online sent it using an input element. what do you know */}
        <input
          type="text"
          onChange={onChange}
          value={userInput}
        />
        {listComponents}
      </React.Fragment>
    );
  }
}

export default AutoComplete;