import React, { Component } from 'react';
import PropTypes from 'prop-types';
require('./updateQuantity.css');

export default class UpdateQuantity extends Component {
  constructor(props) {
    super(props);
    this.updateQty.bind(this);
    this.state = {
      itemId: '',
      quantity: 0
    }
  }

  updateQty(itemId, quantity) {
    if(quantity < 0) {
      quantity = 0;
    }
    let localData = JSON.parse(localStorage.getItem("cartData"));
    if(!localData) {
      localData = [];
    }
    let index = localData.findIndex((dt) => {
      return dt.itemId === itemId
    });
    if(index < 0) {
      localData.push({itemId: itemId, quantity: quantity});
    } else {
      localData[index].quantity = quantity;
    }
    localStorage.setItem("cartData", JSON.stringify(localData));
    this.props.onChange(itemId, quantity);
  }
  render() {
    const { itemId, quantity } = this.props;
    return(
      <div className="qtyContainer">
        <div className="qtyInnerConainer">
          <button className="btn-update-qty" onClick={() => this.updateQty(this.state.itemId || this.state.quantity - 1 : 0)}>-</button>
          <div className="quantity">{quantity || 0}</div>
          <button className="btn-update-qty" onClick={() => this.updateQty(this.state.itemId || itemId, this.state.quantity + 1)}>+</button>
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
  itemId: PropTypes.number,
};
