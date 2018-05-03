import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <User></User>
        <User age="33">Oyedayo</User>
        <User age="43">Samuel</User>
        <User age="53">Sonja </User>
      </div>
    );
  }
}

export default Users;
