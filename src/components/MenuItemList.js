import React, { Component } from 'react';
import MenuItem from './MenuItem';

class MenuItemList extends Component {
    render() {
        const {menus, onIncrease, onDecrease} = this.props;

        const menuList = menus.map(
            ({ id, text, price, count }, i) => (
                <MenuItem
                    key={i}
                    id={id}
                    text={text}
                    price={price}
                    count={count}
                    onIncrease = {onIncrease}
                    onDecrease = {onDecrease}
                />
            )
        );

        return (
            <div>
                {menuList}
            </div>
        )
    }
}

export default MenuItemList;