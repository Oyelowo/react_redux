import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I am a good guy </h1> 
      </div>
    );
    // above jsx gets compiled into the javascript below:
    // return React.createElement('div', {className: 'App'}, React.createElement('hi', null, 'Hi, i am react app!!'));
  }
}

export default App;
