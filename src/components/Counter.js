import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    state = {
        number: 0
    }

    handleIncrease = () => {
        const { number } = this.state;

        this.setState({
            number: number + 1
        });
    }

    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );
    }

    render() {
        return (
            <div className="Menu-Counter">
                <button onClick={this.handleIncrease}>+</button>
                <p>{this.state.number}</p>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;