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
      filteredCategories: [],
      filteredResults: [],
      showDropdowns: false,
      parsed: false,
      userInput: ""
    };
  }

  onChange = e => {
    this.setState({ filteredResults: [], filteredCategories: []}) //clears existing array of choices
    console.log("did I delete myself?")
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    suggestions.map(category => this.state.filteredCategories.push(category.tool_category))
    suggestions.map(tool => this.state.filteredResults.push(tool.tool_name))
    
    //console.log(suggestions)
    //console.log("filter", this.state.filteredValues);
    
    if(this.state.filteredCategories.includes(userInput)){
       console.log("ding!")
       if(this.state.filteredValues){ this.state.filteredValues.splice(0, this.state.filteredValues.length) }
       const filteredValues = suggestions.map(results => {
            if (Object.values(results).includes(userInput)){
                console.log(this.state.filteredValues)
                console.log("dong!!")
                this.state.filteredValues.push(results.tool_name)
            }
            
        })

        this.setState({
            currentValue: 0,
            filteredValues,
            showDropdowns: true,
            userInput: e.currentTarget.value
          })
          
    } 
    console.log(this.state.filteredValues)
    //console.log(this.state.filteredCategories)
    const filterList = this.state.filteredResults;  //deconstruction
    const filteredValues = filterList.filter(
      suggestion =>
        suggestion.toLowerCase().includes(userInput.toLowerCase())
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
    //this.props.suggestions.map(tool => this.state.filteredResults.push(tool.tool_name))
    const {
      onChange,
      onClick,
      state: {currentValue, filteredValues, showDropdowns, userInput}
    } = this;
    console.log("Bink!", this.state.filteredValues)
    
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