import React, { Component } from 'react';
import MenuItemTemplate from '../components/MenuItemTemplate';
import MenuItemList from '../components/MenuItemList';
import MenuItem from '../components/MenuItem';

class Macdonald extends Component {
    state = {
        menus: [
            { id: 0, text: '골든 에그 치즈버거', price: 9000, number: 0 },
            { id: 1, text: '그릴드 머쉬룸 버거', price: 8700, number: 0 },
            { id: 2, text: '함박버거', price: 5200, number: 0 },
            { id: 3, text: '빅맥', price: 5500, number: 0 },
            { id: 4, text: '메가맥', price: 6000, number: 0 },
            { id: 5, text: '1955버거', price: 6500, number: 0 },
            { id: 6, text: '맥스파이시버거', price: 6100, number: 0 },
            { id: 7, text: '슈슈버거', price: 5400, number: 0 }
        ]
    }

    render() {
        const { menus } = this.state;
        return (
            <div>
                <MenuItemTemplate />
                <MenuItemList menus={menus} />
            </div>
        );
    }
}

export default Macdonald;