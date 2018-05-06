import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Oyelowo',
        age: 23
      }, {
        name: 'Aleksi',
        age: 57
      }, {
        name: 'Sam',
        age: 19
      }
    ],
    otherState: 'some other values'
  };

  switchNameHandler = (newName) => {
    // console.log('was clicked!');  DON'T DO THIS(MUTATE STATE)
    // this.state.persons[0].name = 'BaBaNe'
    this.setState({
      persons: [
        {
          name: newName,
          age: 24
        }, {
          name: 'bright',
          age: 57
        }, {
          name: 'Sam',
          age: 19
        }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Oyelowo',
          age: 24
        }, {
          name: event.target.value,
          age: 57
        }, {
          name: 'Sam',
          age: 19
        }
      ]
    })
  }

  render() {
    // inline style
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>I am a good guy
        </h1>
        <p>i love this!</p>
        {/* bind is more recommended, as it is inefficient */}
        <button style={style}
         onClick={() => this.switchNameHandler('Dayo!!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this
          .switchNameHandler
          .bind(this, 'Perfe!!!')}
          changed={this.nameChangeHandler}>MY interest: Coding</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // above jsx gets compiled into the javascript below: return
    // React.createElement('div', {className: 'App'}, React.createElement('hi',
    // null, 'Hi, i am react app!!'));
  }
}

export default App;
