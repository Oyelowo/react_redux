import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I am a good guy </h1> 
        <p>i love this!</p>
        <Person name="Oyelowo" age="23"/>
        <Person name="Aleksi" age="57">MY interest:  Coding</Person>
        <Person name="Sam" age="19"/>
      </div>
    );
    // above jsx gets compiled into the javascript below:
    // return React.createElement('div', {className: 'App'}, React.createElement('hi', null, 'Hi, i am react app!!'));
  }
}

export default App;
