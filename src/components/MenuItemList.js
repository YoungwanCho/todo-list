import React, { Component } from 'react';
import MenuItem from './MenuItem';

class MenuItemList extends Component {
    render() {
        const {menus} = this.props;

        const menuList = menus.map(
            ({ id, text, price, number }, i) => (
                <MenuItem
                    key={i}
                    id={id}
                    text={text}
                    price={price}
                    number={number}
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