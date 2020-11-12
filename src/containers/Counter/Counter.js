import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 5
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
            default:
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecCounter} /> 
                <CounterControl label="Add 5" clicked={this.props.onAdd5Counter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSub5Counter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({type: 'INCREMENT'}),
        onDecCounter: () => dispatch({type: 'DECREMENT'}),
        onAdd5Counter: () => dispatch({type: 'ADD5'}),
        onSub5Counter: () => dispatch({type: 'SUB5'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);