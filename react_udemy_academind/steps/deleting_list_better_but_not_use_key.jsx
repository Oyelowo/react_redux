import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'lowo',
        age: 23
      }, {
        name: 'Sam',
        age: 25
      }, {
        name: 'Sonja',
        age: 21
      }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Dayo',
          age: 23
        }, {
          name: 'Sam',
          age: 25
        }, {
          name: event.target.value,
          age: 21
        }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // because arrays and objects are referenced (and not primitives like string, numbers and booleans), 
    // when you only assign an array to a new variable, an alteration in one can affect
    // the other which might lead to unintended consequences. therefore, I should use the slice method or
    //  spread operator to first copy the array to create an entirely new copy which will not affect the original
    //  in the course of alteration, as below where I splice elements in the list
    // use either the slice or spreat operator to copy the array
    //Always update state in immutable way
    // const persons = this.state.persons.slice();  //this is an alternative
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // create the persons variable
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this
            .state
            .persons
            .map((person, index) => {
              // can also use {this.deletePersonHandler.bind(this, index)} below
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}/>
            })}

        </div>
      )
    }

    return (
      <div className="App">
        <h1>Let's make this work</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        <br/>
        <br/>
        <button onClick={this.makeOlder}>make older</button>

        {persons}
      </div>
    );
  }
}

export default App;
