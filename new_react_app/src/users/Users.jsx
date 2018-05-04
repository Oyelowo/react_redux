import React, {Component} from "react";
import User from "./User.jsx";








/* More dynamic

class Users extends Component {
  state={
    users:[
      {name: "Oyelowo", age:23},
      {name: "Dayo", age:25},
      {name: "Sam", age:72},
      {name: "Aleksi", age:82},
      {name: "Saka", age:52},
      {name: "Emil", age:79},
      {name: "Henri", age:42},
      {name: "Sonja", age:48},
    ],
    title: "Users List"
  }
  
  makeYounger = () => {
    const newState = this.state.users.map((obj) => obj.age-=10);
    return this.setState({newState})
    
  }
  
    render() {
      return (
        <div>
          <button onClick={this.makeYounger}>Make Us 20 years Older</button>
          <br/>
          <h1>{this.state.title}</h1>
          {this.state.users.map((user)=> <User age={user.age}>{user.name}</User>)}
        </div>
      );
    }
  }
  */

/*  HARDCODING SET STATE
class Users extends Component {
  state={
    users:[
      {name: "Oyelowo", age:23},
      {name: "Dayo", age:25},
      {name: "Sam", age:72},
    ],
    title: "Users List"
  }
  
  makeYounger = () => {
    console.log('clicked');
    this.setState({
      users:[
        {name: "Oyelowo", age:13},
        {name: "Dayo", age:15},
        {name: "Sam", age:62},
      ]
    })
    
    console.log('clicked');
  }
  
    render() {
      return (
        <div>
          <button onClick={this.makeYounger}>Make Us 20 years Older</button>
          <br/>
          <h1>{this.state.title}</h1>
          <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
          <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
          <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
        </div>
      );
    }
} */
  
/* Using props
class Users extends Component {
  render() {
    return (
      <div>
        <User age="23">Oyelowo</User>
        <User age="25">Dayo</User>
        <User age="72">Sam</User>
      </div>
    );
  }
}*/

export default Users;
