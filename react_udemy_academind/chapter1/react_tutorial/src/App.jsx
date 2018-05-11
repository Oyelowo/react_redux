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
    ]
  }

  changeName = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
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

  // makeOlder(){   this.setState({     persons: [       {name: 'lowo', age: 24},
  // {name: 'Sam', age: 26},       {name: 'Sonja', age: 22}     ]   }) } when

  // makeOlder = () => {

  //   this.setState({
  //     persons: [
  //       {
  //         name: newName,
  //         age: 24
  //       }, {
  //         name: 'SamBoy',
  //         age: 26
  //       }, {
  //         name: 'SonjaGirl',
  //         age: 22
  //       }
  //     ]
  //   })
  // }



render() {
const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
}


  return (
    <div className="App">
      <h1>Let's make this work</h1>
      <button style={style} onClick={this
        .changeName
        .bind(this, 'Dayo')}>Switch Name</button>
      <br/>
      <br/>
      <button onClick={this.makeOlder}>make older</button>
      <Person
        click={this
        .changeName
        .bind(this, 'Dayo')}
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}>: More about me</Person>

      <Person
        click={() => this.changeName('FInnfrican')}
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}></Person>

      <Person
        nameChangeEvent={this.nameChangeHandler.bind(this)}
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}></Person>

    </div>
  );
}
}

export default App;
