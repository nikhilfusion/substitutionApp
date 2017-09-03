import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import { browserHistory, Link } from 'react-router';
import CartHeader from '../../components/Cart/CartHeader';
import './Partners.css';

const partners = [
  {
    id: 1,
    name: 'Pharmeasy',
    discountText: '20% FLAT DISCOUNT',
    text: '+ 10% for first time users',
  },
  {
    id: 2,
    name: 'Health Saverz',
    discountText: '20% FLAT DISCOUNT',
    text: '+ 10% for first time users',
  },
  {
    id: 3,
    name: 'Airmed',
    discountText: '20% FLAT DISCOUNT',
    text: '+ 10% for first time users',
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

  confirmOrder() {
    if (!this.state.selectedPartnerId) {
      alert('No partner selected');
      return false;
    }
    console.log(partners.find(partner => partner.id === this.state.selectedPartnerId));
    browserHistory.push('/confirm');
    return true;
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
            <div className="partnerCardListContainer">
              {partners.map(partner =>
                <PartnerCard
                  key={partner.id}
                  {...partner}
                  isSelected={partner.id === selectedPartnerId}
                  onSelectClick={id => this.setState({ selectedPartnerId: id })}
                />)}
            </div>
            <div className="cartFooter">
              <div>
                <h6 className="amountContainer">Total Amount</h6>
                <div className="totalAmount">Rs. {selectedCartTotal}</div>
              </div>
              <Link className="proceedButton" onClick={() => this.confirmOrder()}>Proceed</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;

const PartnerCard = ({ id, name, discountText, text, isSelected, onSelectClick }) => (
  <div className={`partnerCardContainer ${isSelected ? 'selected' : ''}`}>
    <div className="partnerName">{name}</div>
    <div>{discountText}</div>
    <div className="additionalText">{text}</div>
    <Button
      className={`selectPartnerButton ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectClick(id)}
      disabled={isSelected}
    >
      {isSelected ? 'Selected' : 'Select'}
    </Button>
  </div>
);

PartnerCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onSelectClick: PropTypes.func,
  text: PropTypes.string,
  discountText: PropTypes.string,
};

PartnerCard.defaultProps = {
  text: '',
  discountText: '',
  isSelected: false,
  onSelectClick: () => console.log('onSelectClick not passed'),
};
