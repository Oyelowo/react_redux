import React, {PureComponent} from 'react';
// import './App.css';
import classes from './App.css';
// import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props) {
    super(props);

    console.log('[App.js] inside constructor', props);

    this.state = {
      persons: [
        {
          id: '01',
          name: 'lowo',
          age: 23
        }, {
          id: '02',
          name: 'Sam',
          age: 25
        }, {
          id: '03',
          name: 'Sonja',
          age: 21
        }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClickedCounter: 0,
      authenticated: false
    }
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()')
  }

  // instead of doing this manually, we can just use PureComponent rather than
  // normal Component. It does this checking to see if any of the properties has
  // been updated and update when just that property is changed However, they
  // should not be used everywhere anyhow as they might affect app performance
  // too. shouldComponentUpdate(nextProps, nextState){   console.log('[UPDATE
  // App.js] Inside shouldComponentUpdate', nextProps, nextState);   return
  // nextState.person !== this.state.persons ||   nextState.showPersons !==
  // this.state.showPersons; } componentWillUpdate(nextProps, nextState){
  // console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps,
  // nextState); }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  // state can also be in constructor but this keyword should be added when used
  // in the constructor. this is not necessary state = {   persons: [     {
  // id: '01',       name: 'lowo',       age: 23     }, {       id: '02',
  // name: 'Sam',       age: 25     }, {       id: '03',       name: 'Sonja',
  //  age: 21     }   ],   otherState: 'some other value',   showPersons: false }

  makeOlder = () => {
    const AllPersons = [...this.state.persons];
    const updatedPersons = AllPersons.map(el => {
      el.age++;
      return el
    })
    this.setState({persons: updatedPersons})
  }

  makeYounger = () => {
    const persons = [...this.state.persons];
    const youngerPersons = persons.map(person => {
      person.age--;
      return person;
    });

    this.setState({persons: youngerPersons});
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this
      .state
      .persons
      .findIndex(p => {
        return p.id === id
      })

    // copy the object, so that the original is not mutated and then find the person
    // with that specific personIndex
    const person = {
      ...this.state.persons[personIndex]
    }

    // Alternative  const person = Object.assign({},
    // this.state.persons[personIndex]); then change the name of the particular
    // person to the input value of the target event
    person.name = event.target.value;

    // again, copy the original list of persons
    const persons = [...this.state.persons];

    // update the particular person which is being changed by assigning to
    // corresponding index on the original list
    persons[personIndex] = person;

    //now, set the state to the newly altered list
    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // because arrays and objects are referenced (and not primitives like string,
    // numbers and booleans), when you only assign an array to a new variable, an
    // alteration in one can affect the other which might lead to unintended
    // consequences. therefore, I should use the slice method or  spread operator to
    // first copy the array to create an entirely new copy which will not affect the
    // original  in the course of alteration, as below where I splice elements in
    // the list use either the slice or spreat operator to copy the array Always
    // update state in immutable way const persons = this.state.persons.slice();
    // //this is an alternative
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClickedCounter: prevState.toggleClickedCounter + 1
      }
    })
  }

  loginHandler= ()=>{
    return this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] inside render()')

    // create the persons variable
    let persons = null;

    if (this.state.showPersons) {
      persons = (<Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
        isAuthenticated = {this.state.authenticated} />);

    }
    const REACT_VERSION = React.version;

    // all the elements in the return have to be wrap in StyleRoot to make t´Radium
    // work for media queries
    return (
      <Aux>

        <button
          onClick={() => {
          this.setState({showPersons: true})
        }}>Show Persons</button>
        <h3>My React Versioon : {REACT_VERSION}</h3>
        <Cockpit
        login={this.loginHandler}
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clickToggle={this.togglePersonsHandler}
          clickMakeOlder={this.makeOlder}
          clickMakeYounger={this.makeYounger}/> {persons}
      </Aux>
    );
  }
}

// Radium(App) : higher order component injecting more function. can also be
// used on functional component: Radium(App)
export default withClass(App, classes.App);
