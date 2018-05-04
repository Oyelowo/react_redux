import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './components/parentToChild/parent';
// import Child from './components/parentToChild/child.jsx' import Users from
// './users/Users.jsx'

class App extends Component {
  state = {
    title: 'placeholder title'
  }

  changeTheWorld = (newTitle) => {
    this.setState({title: newTitle})
  }

  render() {
    return (
      <div className="App">
        {/* <Parent doWhatever={this.changeTheWorld.bind(this, 'new World')} title={this.state.title}/> */}
        <Parent
          changeTheWorldEvent={this
          .changeTheWorld
          .bind(this, 'new world')}
          keepTheWorldSameEvent={this
          .changeTheWorld
          .bind(this, 'same world')}
          title={this.state.title}/>

      </div>
    )
  }
}

export default App;

/*
//  two way binding
class App extends Component {
  state = {
    name: "Oyelowo"
  }

  changeName = (newName) => {
    this.setState({name: newName})
  }

  changeNameFromInput = (event) => {
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <br/>
        <br/>

        <button onClick={()=> this.changeName('Cool Oyelowo')}>Change State non anonymous function</button>
//alternative
<button onClick={this.changeName.bind(this, 'Calm Oyelowo')}>Change State using bind</button>
<br/><br/>
//  you have to provide onChange when you provide value
<input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
        <br/>
        <br/>

        <div>{this.state.name}</div>
      </div>
    );
  }

}

export default App;
*/

/*  hardcoded

class App extends Component {
  state = {
    name: "Oyelowo"
  }

  changeName = () => {
    this.setState({name: "Cool Oyelowo"})
  }

  render() {
    return (
      <div className="App">
        <br/>
        <br/>

        <button onClick={this.changeName}>Change State</button>
        <br/>
        <br/>

        <div>{this.state.name}</div>
      </div>
    );
  }

}

export default App;
*/

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <Users />
      </div>
    );
  }
}
export default App;
*/
