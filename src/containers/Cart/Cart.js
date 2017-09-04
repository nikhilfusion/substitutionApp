import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import CartHeader from '../../components/Cart/CartHeader';
import CartItemList from '../../components/Cart/CartItemList';
import BdvItemList from '../../components/Cart/BdvItemList';
import api from '../../api/api';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBDV: false,
      cartTotal: '',
      bdvItems: [],
      cartItems: [],
      bdvTotal: '',
    };
  }

  componentWillMount() {
    api.getCart().then((cartItems) => {
      const result = JSON.parse(cartItems.result);
      let cartTotal = 0;
      let bdvTotal = 0;
      const recommendedCart = result.recommendedCart;
      const currentCart = result.currentCart;
      this.setState({bdvItems: recommendedCart, cartItems: currentCart});
      const localData = JSON.parse(localStorage.getItem("cartData"));
      recommendedCart.forEach((cart) => {
        const index = localData.findIndex((dt) => {
          return dt.itemId == cart[Object.keys(cart)[0]]._medicineId
        })
        const quantity = index < 0 ? 1 : localData[index].quantity;
        bdvTotal += quantity * cart[Object.keys(cart)[0]]._price;
        this.setState({bdvTotal: bdvTotal});
      })

      currentCart.forEach((cart) => {
        const index = localData.findIndex((dt) => {
          return dt.itemId == cart[Object.keys(cart)[0]]._medicineId
        })
        const quantity = index < 0 ? 1 : localData[index].quantity;
        cartTotal += quantity * cart[Object.keys(cart)[0]]._price;
        this.setState({cartTotal: cartTotal});
      })

    })
  }

  setShowBdvValue(value) {
    this.setState({ showBDV: value });
  }

  render() {
    const { cartTotal, bdvTotal, showBDV, cartItems, bdvItems } = this.state;
    return (
      <div className="cartContainer">
        <CartHeader activeState={1} />
        <div className="container">
          <div className="cartWrapper">
            <h2 className="cartTitle">REVIEW CART</h2>
            <div className="cartSubHeading">Choose one of the cart to checkout to avail medicines at best price</div>
            <div className="cartButtonWrapper">
              <Button
                className={`cartBannerButton left ${!showBDV ? 'active' : ''}`}
                onClick={() => this.setShowBdvValue(false)}
              >
                MY CART
              </Button>
              <Button
                className={`cartBannerButton right ${showBDV ? 'active' : ''}`}
                onClick={() => this.setShowBdvValue(true)}
              >
                MY BDV CART
                <div className="bestValueText">BEST VALUE</div>
                <div className="saveAmount">Save Rs. {Math.round(cartTotal - bdvTotal)}</div>
              </Button>
            </div>
            <div className="cartItemListContainer">
              {!showBDV && <CartItemList items={cartItems} />}
              {showBDV && <BdvItemList items={bdvItems} />}
            </div>
            <div className={`cartFooter ${showBDV ? 'bdvCart' : 'userCart' }`}>
              <div>
                <h6 className="amountContainer">Total Amount</h6>
                <div className="totalAmount">Rs. {showBDV ? bdvTotal : cartTotal}</div>
              </div>
              <Link className="proceedButton" to="/partners">Proceed</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
