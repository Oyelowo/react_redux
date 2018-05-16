import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

// import Radium from 'radium';

class Person extends Component {
    constructor(props) {
        super(props);

        console.log('[Person.js] inside constructor', props);
    }
    componentWillMount() {
        console.log('[Person.js] inside componentWillMount()');
    }
    componentDidMount() {
        console.log('[Person.js] inside componentDidMount()')
    }

    render() {
        console.log('[Person.js] inside render()')
        return (
            <Aux>
                <p>I am {this.props.name}
                    and I am {this.props.age}
                    years old{this.props.children}.
                    <button onClick={this.props.click}>Delete Me</button>
                </p>
                <input
                    type="text"
                    value={this.props.name}
                    onChange={this.props.nameChangeEvent}/>
            </Aux>
        );
    }
}

// functional style const person = (props) =>{     return (<div
// className={classes.Person}>         <p>I am {props.name} and I am {props.age}
// years old{props.children}. <button onClick={props.click}>Delete
// Me</button></p>         <input type="text" value={props.name}
// onChange={props.nameChangeEvent}/>     </div>     ) };


// NOTE: proptypes does not work in functional component
// it should not necessarily be used everywhere e.g when we only need
// to display the values. but when we need to do some manipulations
// such as calculation etc, it might be necessary and the state component should
// be used in that case
Person.PropTypes = {
    name: PropTypes.string,
    click: PropTypes.func,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);