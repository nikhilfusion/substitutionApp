import React, { PropTypes } from 'react';

const BdvItemList = ({ items }) => (
  <div className="bdvItemList">
    BDV Item List
    {items.map(item => <div>THis the the item {item}</div>)}
  </div>
);

BdvItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default BdvItemList;
