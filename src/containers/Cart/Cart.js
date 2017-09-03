import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import CartHeader from '../../components/Cart/CartHeader';
import CartItemList from '../../components/Cart/CartItemList';
import BdvItemList from '../../components/Cart/BdvItemList';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);

    // cartItems: JSON.parse(localStorage.getItem('cartData')) || [],
    this.state = {
      showBDV: false,
      cartItems: [
        { medicineId: '12345',
          medicineName: 'Crocin',
          manufacturer: 'Cipla Ltd',
          packForm: 'tablet',
          packSize: '10 tablets in a Strip',
          isRxRequired: false,
          quantity: 2,
          price: 123,
        },
        { medicineId: '12345',
          medicineName: 'Crocin',
          manufacturer: 'Cipla Ltd',
          packForm: 'tablet',
          packSize: '10 tablets in a Strip',
          isRxRequired: false,
          quantity: 2,
          price: 123,
        },
        { medicineId: '12345',
          medicineName: 'Crocin',
          manufacturer: 'Cipla Ltd',
          packForm: 'tablet',
          packSize: '10 tablets in a Strip',
          isRxRequired: false,
          quantity: 2,
          price: 123,
        },
      ],
      cartTotal: 456,
      bdvItems: [],
      bdvTotal: 123,
    };
  }

  setShowBdvValue(value) {
    this.setState({ showBDV: value });
  }

  ComponentDidMount() {
    console.log();
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
                <div className="saveAmount">Save Rs. {cartTotal - bdvTotal}</div>
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
