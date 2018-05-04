import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/user.jsx'

class App extends Component {
  state = {
    users: [
      {
        id: "unique1",
        name: 'Oyelowo',
        age: 23
      }, {
        id: "unique2",
        name: 'Aleksi',
        age: 30
      }, {
        id: "unique3",
        name: 'Mika',
        age: 49
      }
    ]
  }

  deleteUser = (index, event) => {
    const users= Object.assign([], this.state.users); //copy into empty array
    users.splice(index, 1);
    return this.setState({users: users})
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this
            .state
            .users
            .map((user, index) => <User
              age={user.age}
              key={user.id}
              delEvent={this
              .deleteUser
              .bind(this, index)}> {user.name}</User>)}
        </ul>

      </div>
    );
  }
}

export default App;
