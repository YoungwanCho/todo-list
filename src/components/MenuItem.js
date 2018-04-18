import React, { Component } from 'react';
import Counter from './Counter';
import './MenuItem.css';

class MenuItem extends Component {
    render() {
        const { id, text } = this.props;
        return (
            <div className='Menu-Item' >{id} {text} <Counter /></div>
        );
    }
}

export default MenuItem;