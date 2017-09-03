import React, { Component } from 'react';
import PropTypes from 'prop-types';
require('./updateQuantity.css');

export default class UpdateQuantity extends Component {
  constructor(props) {
    super(props);
    this.updateQty.bind(this);
  }

  updateQty(itemId, quantity) {
    console.log('itemId is ', itemId);
    console.log('quantity is ', quantity);
    this.props.onChange(itemId, quantity);
  }
  render() {
    const { itemId, quantity } = this.props;
    console.log('this.props is ', this.props);
    return(
      <div className="qtyContainer">
        <div className="qtyInnerConainer">
          <button className="btn-update-qty" onClick={() => this.updateQty(itemId, quantity ? quantity - 1 : 0)}>-</button>
          <div className="quantity">{quantity || 0}</div>
          <button className="btn-update-qty" onClick={() => this.updateQty(itemId, quantity ? quantity + 1: 0)}>+</button>
        </div>
      </div>
    );
  }
}


UpdateQuantity.defaultProps = {
  updateQty: () => { throw new Error('updateQuantity is not passed'); },
};

UpdateQuantity.propTypes = {
  quantity: PropTypes.number,
  updateQty: PropTypes.func,
  itemId: PropTypes.string,
};
