import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Students from './students/Students.jsx'
const breakMore = () => (<p>I say what I feel. yeahyeah</p>);

function testMan(){
  return "I am for real!. You cant try"
}

const testFunc = function(){
  return <a>We are here to WIN! </a>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{breakMore()}</h1>
        </header>
        <p className="App-intro">
          <h5>{testMan()}</h5>
          {testFunc()}
        </p>
        <Students position="developers"/>
      </div>
    );
  }
}

export default App;
