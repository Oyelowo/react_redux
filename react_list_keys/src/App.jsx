import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import User from './components/user.jsx'
import UniqueId from 'react-html-id'

class App extends Component {
  constructor() {
    super();
UniqueId.enableUniqueIds(this)

    this.state = {
      users: [
        {
          id:this.nextUniqueId(),
          name: 'Oyelowo',
          age: 23
        }, {
          id: this.nextUniqueId(),
          name: 'Aleksi',
          age: 30
        }, {
          id: this.nextUniqueId(),
          name: 'Mika',
          age: 49
        }
      ]
    }
    console.log(this.state);
  }

  deleteUser = (index, event) => {
    const users = Object.assign([], this.state.users); //copy into empty array
    users.splice(index, 1);
    return this.setState({users: users})
  }

  changeUserName = (id, e) => {
    const index = this.state.users.findIndex((user)=>{
      return user.id==id
    });

    const user = Object.assign({}, this.state.users[index]);

    user.name = e.target.value;

    const users = Object.assign([], this.state.users);

    users[index] = user;

    this.setState({users:users});
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
              .bind(this, index)}
              changeEvent={this.changeUserName.bind(this, user.id)}>
              {user.name}</User>)}
        </ul>

      </div>
    );
  }
}

export default App;
