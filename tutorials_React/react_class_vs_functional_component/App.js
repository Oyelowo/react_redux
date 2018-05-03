import React, { Component } from 'react';
import Users from './users/Users'
import './App.css';

function sayHi(){
  return "Hello"
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <Users title="Users' List of life"/>
      <Users title="keep it real"/>
      </div>
      );
  }
}

export default App;



 