import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App'

// import Radium from 'radium';

class Person extends Component {
    constructor(props) {
        super(props);

        console.log('[Person.js] inside constructor', props);
        this.inputElement = React.createRef();
    }
    componentWillMount() {
        console.log('[Person.js] inside componentWillMount()');
    }
    componentDidMount() {
        console.log('[Person.js] inside componentDidMount()');
        // if (this.props.position === 0) {
        //     this.inputElement.current.focus();
        // }
    }

    myFocus(){
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] inside render()')
        return (
            <Aux>
                <AuthContext.Consumer>
                {auth => auth ? <p> I am authenticated </p> : null}
                </AuthContext.Consumer>
                <p>I am {this.props.name}
                    and I am {this.props.age}
                    years old{this.props.children}.
                    <button onClick={this.props.click}>Delete Me</button>
                </p>
                {/* ref are onl available in state componenets */}
                <input
                    ref={this.inputElement}
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

// NOTE: proptypes does not work in functional component it should not
// necessarily be used everywhere e.g when we only need to display the values.
// but when we need to do some manipulations such as calculation etc, it might
// be necessary and the state component should be used in that case
Person.propTypes = {
    name: PropTypes.string,
    click: PropTypes.func,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);