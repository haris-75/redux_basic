import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecCounter} /> 
                <CounterControl label="Add 13" clicked={this.props.onAdd5Counter} />
                <CounterControl label="Subtract 17" clicked={this.props.onSub5Counter} />

                <hr/>
                <button
                    className="btn_1"
                    onClick={this.props.onStoreResult}
                    >
                        Submit Counter
                </button>

                <ul>
                    {this.props.storeResult.map(strResult => {
                        return (
                        <li 
                            key = {strResult.id} 
                            onClick = {this.props.onDeleteResult}>
                                {strResult.value}
                                {console.log(strResult.id)}
                        </li>
                        );
                    })}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storeResult: state.result,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({type: 'INCREMENT', value: 9}),
        onDecCounter: () => dispatch({type: 'DECREMENT', value: 6}),
        onAdd5Counter: () => dispatch({type: 'ADD13', value: 13}),
        onSub5Counter: () => dispatch({type: 'SUB17', value: 17}),
        onStoreResult: () => dispatch({type: 'STORERESULT'}),
        onDeleteResult: () => dispatch({type: 'DELETERESULT'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);