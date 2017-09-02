import React, { PropTypes } from 'react';

const CartItem = ({ medicineId, medicineName, manufacturer, packForm, packSize, isRxRequired, quantity, price }) => (
  <div className="cartItemContainer">
    <div>{medicineName}</div>
    <div>{packForm} | {packSize}</div>
    <div>{manufacturer}</div>
    <div>{isRxRequired}</div>
    <div>{quantity}</div>
    <div>{price}</div>
    <div>Subtotal{medicineId}</div>
  </div>
);

CartItem.propTypes = {
  medicineId: PropTypes.string.isRequired,
  medicineName: PropTypes.string.isRequired,
  packForm: PropTypes.string.isRequired,
  packSize: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  isRxRequired: PropTypes.bool.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default CartItem;
