import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function sayHi(){
  return "Hello"
}
class App extends Component {
  render() {
    return (
      <div>
    <h1>{sayHi()}</h1>
      </div>
      );
  }
}

export default App;



 