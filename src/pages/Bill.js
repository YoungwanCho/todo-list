import React, { Component } from 'react';
import MenuItem from '../components/MenuItem';

class Bill extends Component {

    handleHome = () => {
        document.location = "/";
    }

    render() {
        return (
            <div>
                <h2>
                    주문완료
                </h2>
                <button onClick = {this.handleHome}>홈으로</button>
            </div>
        );
    }
}

export default Bill;