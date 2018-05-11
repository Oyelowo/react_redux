import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './Users/UserOutput';
import UserInput from './Users/UserInput'

class App extends Component {
  state = {
    username: [
      {
        name: 'Oyedayo'
      }, {
        name: 'Sam'
      }, {
        name: 'Sonja'
      }
    ]
  }

  AddNewUsername = () => {
    this.setState({
      username: [
        {
          name: 'NewOyelowo'
        }, {
          name: 'NewSam'
        }, {
          name: 'NewSonja'
        }
      ]

    })
  }

  changeUsername = (event) => {
    this.setState({
      username: [
        {
          name: event.target.value
        }, {
          name: 'Sam'
        }, {
          name: 'Sonja'
        }
      ]

    })
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'purple',
      padding: '10px',
      color: '#ccc',
    }

    return (
      <div className="App">
        <section className="App">
          <button style={buttonStyle} onClick={this. AddNewUsername}>change Username</button>
          <UserOutput username={this.state.username[0].name}>I want to make a good change like {this.state.username[0].name}</UserOutput>
          <UserInput
            username={this.state.username[0].name}
            changeName={this
            .changeUsername
            .bind(this)}></UserInput>
        </section>

        <section className="App">
          <UserOutput username={this.state.username[1].name}>I am the coolest guy</UserOutput>
          <UserInput
            username={this.state.username[1].name}
            changeName={this
            .changeUsername
            .bind(this)}></UserInput>
        </section>

        <section className="App">
          <UserOutput username='Sonja'>I love nature</UserOutput>
          <UserInput
            username={this.state.username[2].name}
            changeName={this
            .changeUsername
            .bind(this)}></UserInput>
        </section>

      </div>
    );
  }
}

export default App;
