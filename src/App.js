import React from 'react';
import './App.css';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    value: 'lookup a tool my guy'
  }
  
  this.handleChange = this.handleChange.bind(this);
}

handleChange(){
  
}

render() {
  return (
 
    <body>
      <nav role="navigation">Nav <span class="login" role="login">Sign in</span></nav>
      <section>
      <header role="banner">
         <h1 role="title">Tool Library?</h1>
         <h3>Channel your inner frugal handyman by BORROWING instead of BUYING your tools!!!!!</h3>
         <h3>Start here:</h3>
         <input type='search' value={this.state.value} onChange={this.handleChange} role="searchbar"></input>
         <input type='submit' value='submit' role="submit-button"></input>
      </header>
      </section>
    
      <section role="landing-page">
        <h3>Here are some default pictures of tools: </h3>
        <img src="https://cdn.shoplightspeed.com/shops/618849/files/9043966/800x1024x2/schylling-classic-rubber-duck.jpg" height="400" width="400"/>
      </section>
      <section>
        <p>Tool Library allows you to look up the tools you need for your next big project without the hassle of buying things you only need once! ISN'T THAT GREAT?!?</p>
        <p>Reserve your tools online, and come in-store for pickup when you're ready! No hassle guaranteed!</p>
      </section>
      <footer role="contact-info">Footer</footer>
    </body>
    );
  }
}

export default App;
