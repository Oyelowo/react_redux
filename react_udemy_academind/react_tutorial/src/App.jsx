import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>madman jaga</h1>
        <Person/>
        <Person/>
        <Person/>
        
      </div>
    );
  }
}

export default App;
