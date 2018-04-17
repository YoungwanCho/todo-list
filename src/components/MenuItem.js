import React, { Component } from 'react';

class MenuItem extends Component {
    render() {
        const { id, text } = this.props;
        return (
            <div>{id} {text}</div>
        );
    }
}

export default MenuItem;