import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Char from './Components/Char';
import Validation from './Components/Validation';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangeEventHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  deletLetters = (index) => {
    let userInputAltered = this.state.userInput;
    userInputAltered = userInputAltered.split('');
    userInputAltered.splice(index, 1);
    let updatedUserInput = userInputAltered.join('');

    this.setState({userInput : updatedUserInput})
  }

  render() {
    let letters = this.state.userInput;
    letters =letters.split('');

    let letterList = letters.map((letter, index) => {
      if (letter === ' ') {
        return < Char 
        clickDel = {
          ()=>this.deletLetters(index)
        }
        char = '-' />
    } else {
      return < Char clickDel = {
        ()=>this.deletLetters(index)
      }
      char = {
        letter
      } />
  }
});

return (
  <div className="App">

    <input type="text" value={this.state.userInput} onChange={this.inputChangeEventHandler}/>
    <p>{this.state.userInput.length}</p>
    <hr/>
    <Validation textLength ={this.state.userInput.length}/>
    <hr/> {letterList}
    <hr/>

  </div>
);
}
}

export default App;
// z