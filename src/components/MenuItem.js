import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer';
import './MenuItem.css';

class MenuItem extends Component {

    render() {
        const { id, text, price, number } = this.props;
        return (
            <div className='Menu-Item' >{id} {text} {price} <CounterContainer number = {number} /></div>
        );
    }
}

export default MenuItem;