import React, { PropTypes } from 'react';

const CartItemList = ({ items }) => (
  <div className="cartItemList">
    Cart Item List
    {items.map(item => <div>THis the the item {item}</div>)}
  </div>
);

CartItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CartItemList;
