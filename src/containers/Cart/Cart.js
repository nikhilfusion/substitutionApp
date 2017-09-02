import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import CartItemList from '../../components/Cart/CartItemList';
import BdvItemList from '../../components/Cart/BdvItemList';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBDV: false,
      cartItems: [],
      cartTotal: 123,
      bdvItems: [],
      bdvTotal: 123,
    };
  }

  setShowBdvValue(value) {
    this.setState({ showBDV: value });
  }

  render() {
    const { cartTotal, bdvTotal, showBDV, cartItems, bdvItems } = this.state;
    return (
      <div className="cartContainer">
        <div className="container">
          <div className="cartWrapper">
            <h2 className="cartTitle">REVIEW CART</h2>
            <div className="cartSubHeading">Choose one of the cart to checkout to avail medicines at best price</div>
            <div className="cartButtonWrapper">
              <Button className="cartBannerButton left" onClick={() => this.setShowBdvValue(false)}>MY CART</Button>
              <Button className="cartBannerButton right" onClick={() => this.setShowBdvValue(true)}>
                MY BDV CART
                <div className="bestValueText">BEST VALUE</div>
                <div className="saveAmount">Save Rs. {cartTotal - bdvTotal}</div>
              </Button>
            </div>
            <div className="cartItemListContainer">
              {!showBDV && <CartItemList items={cartItems} />}
              {showBDV && <BdvItemList items={bdvItems} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
