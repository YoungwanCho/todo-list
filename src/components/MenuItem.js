import React, { Component } from 'react';
import Counter from './Counter';
import './MenuItem.css';

class MenuItem extends Component {
    render() {
        const { id, text, price, count, onIncrease, onDecrease } = this.props;
        return (
            <div className='Menu-Item' >{id} {text} {price} <Counter 
            id = {id} 
            count = {count}
            onIncrease = {onIncrease}
            onDecrease = {onDecrease}/>
        </div>
        );
    }
}

export default MenuItem;