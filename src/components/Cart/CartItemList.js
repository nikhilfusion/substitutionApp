import React, { PropTypes } from 'react';
import CartItem from './CartItem';

const CartItemList = ({ items }) => (
  <div className="cartItemList">
    {items.map((item, key) => <CartItem {...item[Object.keys(item)[0]]} key={key} />)}
  </div>
);

CartItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CartItemList;
