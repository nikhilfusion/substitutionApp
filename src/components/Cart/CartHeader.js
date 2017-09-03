import React, { PropTypes } from 'react';
import './CartHeader.css';

const CartHeader = ({ activeState }) => (
  <div className="cartHeaderContainer">
    <div className="cartStateContainer">
      <div className={`cartState ${activeState === 1 ? 'active' : ''}`}>
        <div className="cartStateNumber">1</div>
        <div className="cartStateTitle">REVIEW CART</div>
      </div>
      <div className={`cartState ${activeState === 2 ? 'active' : ''}`}>
        <div className="cartStateNumber">2</div>
        <div className="cartStateTitle">PARTNER SELLERS</div>
      </div>
    </div>
  </div>
);

CartHeader.propTypes = {
  activeState: PropTypes.number,
};

CartHeader.defaultProps = {
  activeState: 1,
};

export default CartHeader;
