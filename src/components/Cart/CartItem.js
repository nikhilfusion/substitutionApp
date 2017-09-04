import React, { PropTypes } from 'react';
import './CartItem.css';

const CartItem = ({ _medicineId, _medicineName, _manufacturer, _formFactor, _quantityPerFormFactor, isRxRequired, _price }) => {
  const localData = JSON.parse(localStorage.getItem("cartData"));
  const index = localData.findIndex((dt) => {
    return dt.itemId == _medicineId
  })
  const quantity = index < 0 ? 1 : localData[index].quantity;
  return(
    <div className="cartItemContainer">
      <div>{_medicineId} - {_medicineName}</div>
      <div>{_formFactor} | {_quantityPerFormFactor}</div>
      <div>{_manufacturer}</div>
      <div>{isRxRequired}</div>
      <div>{quantity} x Rs. {_price}</div>
      <div>Rs. {Number(quantity) * Number(_price)}</div>
    </div>
  )
}

CartItem.propTypes = {
  _medicineId: PropTypes.number.isRequired,
  _medicineName: PropTypes.string.isRequired,
  _formFactor: PropTypes.string.isRequired,
  _quantityPerFormFactor: PropTypes.string.isRequired,
  _manufacturer: PropTypes.string.isRequired,
  _price: PropTypes.number.isRequired,
};

export default CartItem;
