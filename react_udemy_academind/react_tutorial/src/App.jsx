import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';

class App extends Component {

  constructor() {
    super();
    this.changeName = this
      .changeName
      .bind(this);
    // this.makeOlder=this.makeOlder.bind(this);
  }
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
    ]
  }

  changeName() {
    this.setState({
      persons: [
        {
          name: 'lowoBoy',
          age: 23
        }, {
          name: 'SamBoy',
          age: 25
        }, {
          name: 'SonjaGirl',
          age: 21
        }
      ]
    })
  }

  // makeOlder(){   this.setState({     persons: [       {name: 'lowo', age: 24},
  //      {name: 'Sam', age: 26},       {name: 'Sonja', age: 22}     ]   }) }

  //when using es6 format as opposed to es5, it handles the scope of "this" and binding is needless
  makeOlder = () => {

    this.setState({
      persons: [
        {
          name: 'lowo',
          age: 24
        }, {
          name: 'Sam',
          age: 26
        }, {
          name: 'Sonja',
          age: 22
        }
      ]
    })

  }
  render() {
    return (
      <div className="App">
        <h1>Let's make this work</h1>
        <button onClick={this.changeName}>Switch Name</button>
        <br/>
        <br/>
        <button onClick={this.makeOlder}>make older</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>: More about me</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>

      </div>
    );
  }
}

export default App;
