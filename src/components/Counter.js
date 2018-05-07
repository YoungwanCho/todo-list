import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    render() {
        const {id, count, onIncrease, onDecrease} = this.props;
        return (
            <div className="Menu-Counter">
                <button onClick={()=>onIncrease(id)}>+</button>
                <p>{count}</p>
                <button onClick={()=>onIncrease(id)}>-</button>
            </div>
        );
    }
}

export default Counter;