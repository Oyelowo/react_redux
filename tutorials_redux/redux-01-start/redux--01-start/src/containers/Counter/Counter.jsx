import React, { Component } from 'react';
import { connect } from "react-redux";
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd5}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract5}  />
            </div>
        );
    }
}


const mapStateToProps = state =>{
    return {
        ctr: state.counter
    };
}

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter : ()=> dispatch({type: 'INCREMENT'}),
        onDecrementCounter : ()=> dispatch({type: 'DECREMENT'}),
        onAdd5 : ()=> dispatch({type: 'ADD_5', value: 5}),
        onSubtract5 : ()=> dispatch({type: 'SUBTRACT_5', value: 5})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);