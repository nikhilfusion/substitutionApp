import React, { PropTypes } from 'react';
import CartItem from './CartItem';

const CartItemList = ({ items }) => (
  <div className="cartItemList">
    Cart Item List
    {items.map((item, key) => <CartItem {...item} key={key} />)}
  </div>
);

CartItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CartItemList;
