import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './ValidationComponent';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    userInput: ''
  }

  changeInputHandler = (event) => {
    this.setState({userInput: event.target.value})
  };

  deleteLetter = (index) => {
    const letterList = this
      .state
      .userInput
      .split('');
    letterList.splice(index, 1);
    const updatedText = letterList.join('');
    this.setState({userInput: updatedText})
  }

  render() {
    const charList = this
      .state
      .userInput
      .split('');

    const letterList = charList.map((letter, index) => {
      if (letter != " ") {
        return <CharComponent
          key={index}
          character={letter}
          clicked=
          {()=> this.deleteLetter(index)}/>
          // this.deleteLetter.bind(this, index) //Alternative
          
      } else {
        return <CharComponent
          key={index}
          character='-'
          clicked=
          {()=> this.deleteLetter(index)}/>
      }

    })

    return (
      <div className="App">
        <input
          onChange={this.changeInputHandler}
          value={this.state.userInput}
          type="text"/>
        <p>{this.state.userInput}</p>
        <p>{this.state.userInput.length}</p>
        <ValidationComponent userInputLength={this.state.userInput.length}/> {letterList}

      </div>
    );
  }
}

export default App;
