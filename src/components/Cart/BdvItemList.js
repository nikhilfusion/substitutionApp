import React, { PropTypes } from 'react';
import CartItem from './CartItem';

const BdvItemList = ({ items }) => (
  <div className="bdvItemList">
    BDV Item List
    {items.map((item, key) => <CartItem {...item[Object.keys(item)[0]]} key={key} />)}
  </div>
);

BdvItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default BdvItemList;
