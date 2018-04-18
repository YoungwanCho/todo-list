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
            <form className="Menu-Counter">
                <button onClick={this.handleIncrease}>+</button>
                <b1>{this.state.number}</b1>
                <button onClick={this.handleDecrease}>-</button>
            </form>
        );
    }
}

export default Counter;