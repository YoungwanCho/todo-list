import React, { Component } from 'react';
import MenuItemTemplate from '../components/MenuItemTemplate';
import MenuItemList from '../components/MenuItemList';
import MenuItem from '../components/MenuItem';

class Macdonald extends Component {
    state = {
        menus: [
            { id: 0, text: '골든 에그 치즈버거' },
            { id: 1, text: '그릴드 머쉬룸 버거' },
            { id: 2, text: '함박버거' },
            { id: 3, text: '빅맥' },
            { id: 4, text: '메가맥' },
            { id: 5, text: '1955버거' },
            { id: 6, text: '맥스파이시버거' },
            { id: 7, text: '슈슈버거' }
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