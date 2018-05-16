import React, {Component} from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
// import Radium from 'radium';

class Person extends Component {
    constructor(props) {
        super(props);
      
       console.log('[Person.js] inside constructor', props);
    }
     componentWillMount(){
        console.log('[Person.js] inside componentWillMount()');
      }
     componentDidMount(){
        console.log('[Person.js] inside componentDidMount()')
      }


  render() {
    console.log('[Person.js] inside render()')
    return (
        <WithClass classes={classes.Person}> 
        <p>I am {this.props.name} and I am {this.props.age} years old{this.props.children}. 
        <button onClick={this.props.click}>Delete Me</button></p>
        <input type="text" value={this.props.name} onChange={this.props.nameChangeEvent}/>
</WithClass>
    )
  }
}



// functional style
// const person = (props) =>{
//     return (<div className={classes.Person}> 
//         <p>I am {props.name} and I am {props.age} years old{props.children}. <button onClick={props.click}>Delete Me</button></p>
//         <input type="text" value={props.name} onChange={props.nameChangeEvent}/>

//     </div>

//     )
// };


export default Person;