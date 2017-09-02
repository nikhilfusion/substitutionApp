import React, { Component } from 'react';


class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
    };
  }
  render() {
    return (
      <div className="cartContainer">
        THIS IS CART
      </div>
    );
  }
}

export default Cart;
