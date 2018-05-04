import React, { Component } from "react";
import Student from './Student.jsx'
class Students extends Component {
  render() {
    return (
      <div>
          {this.props.position}
   <Student age="50" location="Helsinki" nationality="Finland">Oyelowo</Student>
   <Student></Student>
   <Student nationality="Swedish" location="">Sam</Student>
   <Student></Student>
      </div>
    );
  }
}

export default Students;
