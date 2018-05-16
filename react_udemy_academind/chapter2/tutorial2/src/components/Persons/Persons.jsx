import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    constructor(props) {
        super(props);

        console.log('[Persons.js] inside constructor', props);
        this.lastPersonRef = React.createRef();
    }
    componentWillMount() {
        console.log('[Persons.js] inside componentWillMount()');
    }
    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount()');
        this.lastPersonRef.current.myFocus();
    }

    // instead of doing this manually, we can just use PureComponent rather than
    // normal Component. It does this checking to see if any of the properties has
    // been updated and update when just that property is changed However, they
    // should not be used everywhere anyhow as they might affect app performance
    // too.   componentWillReceiveProps is necessary when received props from
    // outside but not necessary when dealing with internal state as demonstrated in
    // the parent component- App.js   componentWillReceiveProps(nextProps){
    // console.log('[UPDATE Persons.js] Inside componentWillReceiveProps',
    // nextProps);   }   shouldComponentUpdate(nextProps, nextState){
    // console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps,
    // nextState);     return nextProps.persons !== this.props.persons ||
    // nextProps.changed !== this.props.changed ||     nextProps.clicked !==
    // this.props.clicked;   }   componentWillUpdate(nextProps, nextState){
    // console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps,
    // nextState);   }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');

    }

    render() {
        console.log('[Persons.js] inside render()')

        // since " ref={this.lastPersonRef}" repeats at every element of the map
        // the ref attribute would be for the last person
        return (this.props.persons.map((person, index) => {
            
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                position={index}
                ref={this.lastPersonRef}
                age={person.age}
                key={person.id}
                nameChangeEvent={(event) => this.props.changed(event, person.id)}/>
        }));

    };
}

// functional style const persons = (props) => {     return (
// props.persons.map((person, index) => {             return <Person
//  click={() => props.clicked(index)}              name={person.name}
//    age={person.age}              key={person.id}
// nameChangeEvent={(event) => props.changed(event, person.id)}/>          })
//  ) }

export default Persons;