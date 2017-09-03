import React, { Component } from 'react';
import { Link } from 'react-router';
import CartHeader from '../../components/Cart/CartHeader';
import './Partners.css';

const partners = [
  {
    id: 1,
    name: 'Pharmeasy',
    extraDiscount: '20%',
    text: 'Oh Yeah!',
  },
  {
    id: 2,
    name: 'Health Saverz',
    extraDiscount: '10%',
    text: 'Wah ji Wah!',
  },
  {
    id: 3,
    name: 'Airmed',
    extraDiscount: '15%',
    text: 'Balle Balle... !',
  },
];

class Partners extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPartnerId: null,
      selectedCartTotal: 123,
    };
  }

  setSelectedPartnerId(value) {
    this.setState({ showBDV: value });
  }

  render() {
    const { selectedPartnerId, selectedCartTotal } = this.state;
    return (
      <div className="cartContainer">
        <CartHeader activeState={2} />
        <div className="container">
          <div className="cartWrapper">
            <h2 className="cartTitle">AVAILABLE AT</h2>
            <div className="cartSubHeading">Choose one of the partner sellers to avail more discount</div>
            <div className="partnerCardContainer">
              {partners.map(partner => <div key={partner.id}>{partner.name} {selectedPartnerId}</div>)}
            </div>
            <div className="cartFooter">
              <div>
                <h6 className="amountContainer">Total Amount</h6>
                <div className="totalAmount">Rs. {selectedCartTotal}</div>
              </div>
              <Link className="proceedButton" to="/partners">Proceed</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
