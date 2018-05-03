

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
    render() {
      return (
      <div id="name">
      <h1>Hello</h1>
      </div>
      );
    }
  }
  
  /*you can also do the above as below by creating a function above the*/
  /*you can also do the above as below by creating a function above the*/
function sayHi(){
  return <h1>Hello</h1>
}
class App extends Component {
    render() {
      return (
        <div>
      {sayHi()}
        </div>
        );
    }
  }


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



 

export default App;



 